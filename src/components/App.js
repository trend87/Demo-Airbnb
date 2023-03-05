import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import katie from "../images/katie.png"
import star from "../images/star.png"



function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Card
       img={katie}
       star={star}
       rating="5.0"
       reviewCount={6}
       country="USA"
       title="Life lessons with Katie Zaferes"
       price="136"
      
      />
     
   
    </div>
  )
}

export default App