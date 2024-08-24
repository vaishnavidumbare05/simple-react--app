import "./Navbar.css"
import {Link} from "react-router-dom"
import logo from "./react.png"

function Navbar() {
  return (
   <div className="navbar">
        <span className="brand-name"><img src={logo}  height="70px"/></span>
        
    <div className="navbar-links">
      {/* we can't use anchor tag in react we use link component using react-router-dom library */}
      {/* anchor and link are similar but for not reload the page we used link but only when we install react-router-dom */}
        <Link  to="/" className="navbar-links">Home</Link>
        <Link to="/about" className="navbar-links">About</Link>
        <Link to="/App" className="navbar-links">App</Link>

    </div>
    </div>
  )
}

export default Navbar