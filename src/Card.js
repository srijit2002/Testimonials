import React from "react";
import data from "./data";

const Card = ({ index }) => {
    const { name, job, image, text } = data[index];
    return (
        <>
            <div className="card">
                <h1 className="card__heading">We prefer <span> quality </span> over <span>quantity</span></h1>
                <div className="card__details">
                    <p className="card__text">{text}</p>
                    <div className="card__img" style={{background:`url(${image}) no-repeat center center/cover`}}></div>
                </div>
                <h2 className="card__tittle">{name}</h2>
                <h3 className="card__subtittle">{job}</h3>
            </div>
        </>
    )
}

export default Card;