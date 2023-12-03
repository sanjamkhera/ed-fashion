import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Home;