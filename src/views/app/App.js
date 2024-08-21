// function App(){
//     return(<div>App</div>)
// }

//  export default App;
 //WE CREATE DIRECTLY COMPONENT using extension:(ES7+REACT/REDUX/REACT-native@snippets)

 //Whenever install extension ....type only in app.js(rfce)

 import React from 'react'

 import nature from "./nature.jpeg"
 import Navbar from '../../components/navbar/navbar';
 import "./app.css"
 import Footer from "../../components/footer/footer"
 
 function App() {
   return (
     <div>
      <Navbar/>
        <h1 className='page-title'>this is app component</h1>
        <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/breathtaking-bali-nature-free-photo.jpg?w=600&quality=80" height="300px"/>
        <img src={nature} height="300px"/>
        <Footer/>
     </div>
    
   )
 }
 
 export default App