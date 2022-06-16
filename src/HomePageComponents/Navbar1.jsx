import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar1 = () => {
  return (
    <div>
        <h5>Navbar</h5>
        <Link to="/body">Body</Link>
        <Link to="/haircare">Haircare</Link>
        <Link to="/cart">Cart</Link>
    </div>
  )
}
