import React from "react"
import katie from "../images/katie.png"
import star from "../images/star.png"

function Card() {

    return(

        <div className="card-container">
            <div className="card-box">
                <img src={katie} />
                <span>
                    <img src={star} /> 5.0 (6) . USA
                </span>
                <p>Life lessons with Katie Zaferes</p>
                <p> <b>From $136 / </b>  person</p>
            </div>
            
        </div>
    )
}


export default Card