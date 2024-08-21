import React from 'react'
import Navbar from '../../components/navbar/navbar';
import HomeImg from './home.png';
import "./home.css"
import Footer from "../../components/footer/footer"

function Home() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-title'>home</h1>
        <img src={HomeImg} className="header-img"/>
        <Footer/>
        </div>
  )
}

export default Home;