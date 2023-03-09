import React from "react"
import imageGrid from "../images/image-grid.png"

function Hero() {
    
    return(
        <section className="hero-container">
            <img src={imageGrid} className="image-grid" />
            <h2>Online Experiences</h2>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            
        </section>
    )
}

export default Hero