import React, { useState } from "react";
import Card from "./Card";
import data from "./data";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import {FaQuoteLeft} from "react-icons/fa";



const Container = () => {
    const maxLength = data.length - 1;
    const minLength = 0;
    var [index, setIndex] = useState(minLength);
    const increase = () => {
        (index === maxLength) ? setIndex(minLength) : setIndex(++index);
    }
    const decrease = () => {
        (index === minLength) ? setIndex(maxLength) : setIndex(--index);
    }
    const randomIndex = () => {
        const randomIndex = Math.floor(minLength + ((maxLength - minLength) * Math.random()));
        setIndex(randomIndex);
    }
    return (
        <>
        <FaQuoteLeft className="quate__icon"/>
            <IoIosArrowDropleft className="icon icon__left" onClick={decrease} />
            <div className="container">
                <div className="container__body">
                    <Card index={index} />
                </div>
                <button className="btn" onClick={randomIndex}>Random</button>
            </div>
            <IoIosArrowDropright className="icon icon__right" onClick={increase} />
        </>
    )
}


export default Container;