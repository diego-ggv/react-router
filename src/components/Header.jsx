import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
  return (
		<header>
			<Link to="/" className="link__home">
				#VANLIFE
			</Link>
			<nav className="navbar">
				<NavLink
					to="/host"
					className={({ isActive }) => (isActive ? "navbar__link" : "")}
				>
					Host
				</NavLink>
				<NavLink
					to="/vans"
					className={({ isActive }) => (isActive ? "navbar__link" : "")}
				>
					Vans
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? "navbar__link" : "")}
				>
					About
				</NavLink>
				<Link to="login">
					<i className="login-icon fa-regular fa-circle-user"></i>
				</Link>
			</nav>
		</header>
	)
}

export default Header