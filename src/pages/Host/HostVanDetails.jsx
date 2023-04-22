/* 
	This component is a parent component of the HostVanDetailsPricing, 
	HostVanDetailsPhotos, and HostVanDetailsDetails components. 
	It is responsible for fetching the van data from the database,
	and passing it down to the child components. 
	It also renders the navigation links for the child components.
*/

import {
	Link,
	NavLink,
	Outlet,
	useLoaderData,
} from "react-router-dom"
import { getHostVans } from '../../api/apiVans.js'

// LOADER
// ==============================
export const loader = ({ params }) => getHostVans(params.id)

function HostVanDetails() {
	// REACT HOOKS
	// ==============================
	const van = useLoaderData()
	
	// STYLES
	// ==============================
	const activeStyles = {
		color: "#FF8C38",
		textDecoration: "underline",
		fontWeight: "600",
	}

	// RENDER
	// ==============================
	return (
		<section className="host-van-detail-section">
			
			<Link
				relative="path"
				to=".."
				className="back-button">
				&larr; Back to all vans
			</Link>

				<div className="host-van-detail-layout-container">
					<div className="host-van-detail">
						<img src={van.imageUrl} alt={`${van.name} is a ${van.type} van`}/>
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
		</section>
	)
}

export default HostVanDetails
