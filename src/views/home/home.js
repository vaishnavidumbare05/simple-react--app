import React from 'react'
import Navbar from '../../components/navbar/navbar';
import HomeImg from './home.png';
import "./home.css"
import Footer from "../../components/footer/footer"
import toast,{Toaster}from 'react-hot-toast';

function Home() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-title'>Home</h1>
        <img src={HomeImg} className="header-img"/>
        {/* <button type="button" onClick={()=>{
          toast.success("Hello User!")
        }}>
          Show Toast</button> */}
        <button type="button" className="toast-btn" onClick={()=>{
          toast.error("Something went wrong")
        }}>
          Submit</button>
        <button type="button" className="toast-btn" onClick={()=>{
          toast.loading("Please wait...")
        }}>
          Load</button>
        <button type="button"  className="toast-btn" onClick={()=>{
          toast.dismiss();
          toast.success("Successfully Finish..!!!" ,{
           icon:"" ,
           duration:5000,
           style:{
           backgroundColor:"darkorange",
           borderRadius:"10px",
           color:"white"
           }  
          })
        }}>Finish</button>
        
        {/* <button type="button" onClick={()=>{
          toast.error("fail to load..!!!")
        }}>Fail</button> */}
         

        <Footer/>
        <Toaster position='top-center'/>
        </div>
  )
}

export default Home;