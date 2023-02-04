import React from 'react'
import Navbar from '../Componentes/Navbar'
import Footer from '../Componentes/Footer'
import Proj from '../Componentes/Proj'
import Card from '../Componentes/Card'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Proj heading="PROJECTS." text="Some of My Recent Work"/>
      <Card/>
      <Footer/>

    </div>
  )
}

export default Project