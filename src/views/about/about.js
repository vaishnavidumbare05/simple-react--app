import React from 'react'
import Navbar from '../../components/navbar/navbar';
import AboutImg from "./about.png"
import "./about.css"
import Footer from "../../components/footer/footer"
function About() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-title'>about</h1>
        <img src={AboutImg} className="header-img"/>
        <Footer/>
        </div>
  )
}

export default About;