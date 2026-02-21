import React from 'react'
import Hero from '../../Components/Home/Hero/Hero'
import LatestProduct from '../../Components/Home/LatestProducts/LatestProducts'
import Category from '../../Components/Home/Category/Category'

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <LatestProduct/>
      </section>
      <section>
        <Category/>
      </section>
    </div>
  )
}

export default Home
