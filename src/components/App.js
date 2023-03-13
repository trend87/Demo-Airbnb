import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import Data from "./Data"




function App() {

  const cards = Data.map((item) => {
    return <Card 
    key={item.key}
    item={item} //i can also use this to {...item} to spread the objects
   
   />
  })

  return (
    <div>

      <Navbar />
      <div  className="container">

        <Hero />
        <section className="cards-list">
        {cards}
        </section>
      

      </div>
 
  
   
    </div>
  )
}

export default App