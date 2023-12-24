import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <ul className="navbar container">
                <li><Link className="navbar-links" to="/">All</Link></li>
                <li><Link className="navbar-links" to="/full-stack-development">Full Stack Development</Link></li>
                <li><Link className="navbar-links" to="/data-science">Data Science</Link></li>
                <li><Link className="navbar-links" to="/cybersecurity">Cybersecurity</Link></li>
                <li><Link className="navbar-links" to="/career">Career</Link></li>
            </ul>
        </nav>
    )
}