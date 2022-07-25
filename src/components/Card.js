import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src={`${props.item.imageUrl}`} className="card--image" />
            <div className="card--body">
            <p className="card--location">{props.item.location} <a href="{props.item.googleMapsUrl}" className="card--link">View on Google Maps</a></p>
            <h1 className="card--title">{props.item.title}</h1>
            <h5 className="card--date">{props.item.startDate} {props.item.endDate}</h5>
            <p className="card--text">{props.item.description}</p>
            </div>
        </div>
    )
}