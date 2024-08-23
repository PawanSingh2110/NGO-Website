import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import Counter from './components/Counter'
import Hero from './components/Hero'
import Donate from './components/Donate'
import Dotationbed from './components/Dotationbed'
import Band from './components/Band'
import Last from './components/Last'
import Animalbed from './components/Animalbed'



const page = () => {
  return (
    <div className="">
      
        <Hero/>
        <Counter/>
        <Donate/>
        <Band/>
        <Dotationbed/>
        <Animalbed/>
       <Last/>
        
       
        

    </div>
  )
}

export default page