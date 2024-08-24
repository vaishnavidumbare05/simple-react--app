import React from 'react'
import Navbar from '../../components/navbar/navbar';
import AboutImg from "./about.png"
import "./about.css"
import Footer from "../../components/footer/footer"
function About() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-title'>About</h1>
        <img src={AboutImg} className="about-img"/>
        <Footer/>
        </div>
  )
}

export default About;