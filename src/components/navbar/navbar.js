import "./Navbar.css"

function Navbar() {
  return (
   <div className="navbar">
        <span className="brand-name">Deserts🍫</span>
        
    <div className="navbar-links">
        <a href="/" className="navbar-links">Home</a>
        <a href="/about" className="navbar-links">About</a>
        <a href="/App" className="navbar-links">App</a>

    </div>
    </div>
  )
}

export default Navbar