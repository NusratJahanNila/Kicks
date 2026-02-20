import React from 'react'
import Hero from '../../Components/Home/Hero/Hero'
import LatestProduct from '../../Components/Home/LatestProducts/LatestProducts'

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <LatestProduct/>
      </section>
    </div>
  )
}

export default Home
