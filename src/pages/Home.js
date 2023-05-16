import React from 'react'
import Banner from '../component/home/Banner'
import Product from '../component/home/Product'
const Home = () => {
  return (
    <div>
      <Banner/>
      <div className=' w-full -mt-11  xl:-mt-36 py-10'>
   <Product/>
      </div>
    </div>
  )
}

export default Home
