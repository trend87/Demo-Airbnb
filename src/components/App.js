import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import Data from "./Data"




function App() {

  const cards = Data.map((item) => {
    return <Card 
    coverImg={item.coverImg} 
    star={item.stats.star} 
    stats={item.stats.rating} 
    review={item.stats.reviewCount} 
    location={item.location} 
    title={item.title} 
    price={item.price} />
  })

  return (
    <div>

      <Navbar />
      <Hero />
      <section className="cards-list">
      {cards}
      </section>
    
  
   
    </div>
  )
}

export default App