import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
      <div className="nav">
        <div>
          <NavLink className="navlink whiteText home" to="/">🏠 Home</NavLink>
          <NavLink className="navlink whiteText" to="/contacto">🗒 Contacto</NavLink>
        </div>
        <p className="whiteText cake">Happy Cake 🍰</p>
      </div>
    )
  }