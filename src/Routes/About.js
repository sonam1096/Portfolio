import React from 'react'
import Navbar from '../Componentes/Navbar'
import Footer from '../Componentes/Footer'
import Proj from '../Componentes/Proj'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Proj heading="PROJECTS." text="Some of My Recent Work"/>
      <Footer/>
    </div>
  )
}

export default About