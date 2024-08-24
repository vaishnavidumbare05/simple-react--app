// function App(){
//     return(<div>App</div>)
// }

//  export default App;
 //WE CREATE DIRECTLY COMPONENT using extension:(ES7+REACT/REDUX/REACT-native@snippets)

 //Whenever install extension ....type only in app.js(rfce)

 import React from 'react'

 import Applogo from "./react.png"
 import Navbar from '../../components/navbar/navbar';
 import "./app.css"
 import Footer from "../../components/footer/footer"
 
 function App() {
   return (
     <div>
      <Navbar/>
        <h1 className='page-title'>React App</h1>
        <img src={Applogo} height="300px" className='app-logo'/>
        <Footer/>
     </div>
    
   )
 }
 
 export default App