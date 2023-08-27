import React from "react";

function InfoCard(props) {
    return (
        <div>
            <img
                src={`../src/assets/${props.Img}`}
                alt="image.1"
                className="card--image"
            />
            <span className="card--stats">
                {props.stats} +
            </span>
            <p className="card--title">{props.title}</p>
        </div>
    )
}

export default InfoCard;