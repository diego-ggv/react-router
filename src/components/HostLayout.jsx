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
					to="/host/income"
					style={ ({ isActive }) => isActive ? activeStyles : null }
				>
					Income
				</NavLink>
				<NavLink
					to="/host/reviews"
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