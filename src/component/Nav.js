import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <div className="container">
        <a href="" className="navbar-brand">Shop Online New</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Shop</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">Cart</Link>

          </li>
        </ul>
      </div>
    </div>
  )
}