import React from "react"


function Card(props) {
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }

    return(

        <div className="card-container">
            
              {badgeText  && <div className="card-badge"> {badgeText}</div>}
                <img src={`../images/${props.item.coverImg}`} className="card-img"/>
                <span className="card-stats">
                <img src={`../images/${props.item.stats.star}`} className="card-star" /> {props.item.stats.rating } ({props.item.stats.reviewCount}) • {props.item.location}
                </span>
                <p className="card-title">{props.item.title}</p>
                <p className="card-price"> <b>From {props.item.price} / </b>  person</p>
         
            
        </div>
    )
}


export default Card