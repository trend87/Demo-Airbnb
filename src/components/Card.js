import React from "react"

function Card(props) {

    return(

        <div className="card-container">
            <div className="card-box">
                <img src={props.img} />
                <span>
                    <img src={props.star} /> {props.rating } {props.reviewCount} . {props.country}
                </span>
                <p>{props.title}</p>
                <p> <b>From {props.price} / </b>  person</p>
            </div>
            
        </div>
    )
}


export default Card