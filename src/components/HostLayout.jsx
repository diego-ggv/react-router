import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function HostLayout() {
	const activeStyles = {
		color: "#FF8C38",
		textDecoration: "underline",
		fontWeight: "600",
	}

  return (
		<>
			<nav className="host-nav">
				<NavLink
					to="/host"
					end
					style={ ({ isActive }) => isActive ? activeStyles : null }
				>
					Dashboard
				</NavLink>
				<NavLink
					to="income"
					style={ ({ isActive }) => isActive ? activeStyles : null }
				>
					Income
				</NavLink>
				<NavLink
					to="hostVans"
					style={ ({ isActive }) => isActive ? activeStyles : null }
				>
					Vans
				</NavLink>		
				<NavLink
					to="reviews"
					style={ ({ isActive }) => isActive ? activeStyles : null }
				>
					Reviews
				</NavLink>
			</nav>
			<Outlet />
		</>
	)
}

export default HostLayout