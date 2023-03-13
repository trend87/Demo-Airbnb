import React from "react"
import airbnbLogo from "../images/airbnb.png"

function Navbar() {

    return(
        <nav className="navbar">
            <img src={airbnbLogo} className="logo"/>
        </nav>
    )
}

export default Navbar