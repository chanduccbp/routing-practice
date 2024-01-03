// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <navbar className="navbar">
    <div className="logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-pic"
      />
      <h1>Wave</h1>
    </div>
    <ul className="options">
      <li>
        <Link className="item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </navbar>
)

export default Header
