import React from "react"


function Card(props) {

    return(

        <div className="card-container">
            <div className="card-box">
                <img src={`../images/${props.coverImg}`} className="card-img"/>
                <span className="card-stats">
                <img src={`../images/${props.star}`} className="card-star" /> {props.stats } ({props.review}) • {props.location}
                </span>
                <p className="card-title">{props.title}</p>
                <p className="card-price"> <b>From {props.price} / </b>  person</p>
            </div>
            
        </div>
    )
}


export default Card