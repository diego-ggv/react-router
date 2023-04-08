/* 
	This component is a parent component of the HostVanDetailsPricing, HostVanDetailsPhotos, and HostVanDetailsDetails components. It is responsible for fetching the van data from the database and passing it down to the child components. It also renders the navigation links for the child components.
*/

import React, { useEffect, useState } from "react"
import {
	useParams,
	Link,
	NavLink,
	Outlet
} from "react-router-dom"

function HostVanDetails() {
	const { id } = useParams()
	const [van, setVan] = useState(null)

	useEffect(() => {
		fetch(`/api/host/vans/${id}`)
			.then(res => res.json())
			.then(data => setVan(data.vans))
			.catch(err => console.log(err))
	}, [id])

	const activeStyles = {
		color: "#FF8C38",
		textDecoration: "underline",
		fontWeight: "600",
	}

	return (
		<section className="host-van-detail-section">
			<Link to="../vans" className="back-button">
				&larr; Back to all vans
			</Link>
			{van ? (
				<div className="host-van-detail-layout-container">
					<div className="host-van-detail">
						<img src={van.imageUrl} />
						<div className="host-van-detail-info-text">
							<i className={`van__type ${van.type}`}>{van.type}</i>
							<h3>{van.name}</h3>
						</div>
					</div>
					<nav className="host-vans-nav">
						<NavLink
							end
							to="."
							style={({ isActive }) => (isActive ? activeStyles : null)}
						>
							Details
						</NavLink>
						<NavLink
							to="pricing"
							style={({ isActive }) => (isActive ? activeStyles : null)}
						>
							Pricing
						</NavLink>
						<NavLink
							to="photos"
							style={({ isActive }) => (isActive ? activeStyles : null)}
						>
							Photos
						</NavLink>
					</nav>
					
						<Outlet context={{ van }} />
				</div>
			) : (
				<h2>Loading...</h2>
			)}
		</section>
	)
}

export default HostVanDetails
