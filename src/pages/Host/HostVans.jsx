import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api/apiVans.js'
import { requireAuth } from "../../utils/requireAuth.js"

// LOADER
// ==============================
export const loader = async () => {
	await requireAuth()
	return getHostVans()
}

function HostVans() {
	// REACT HOOKS
	// ==============================
	const vans = useLoaderData()

	// COMPONENTS
	// ==============================
	const hostVans = vans.map(van => {
		return (
			<div key={van.id} className="host_van">
				<Link to={van.id} >
					<img src={van.imageUrl} alt={van.name} />
					<div>
						<h2>{van.name}</h2>
						<p>${van.price}/day</p>
					</div>
				</Link>
			</div>
		)
	})
	
	//	RENDER
	// ==============================
	return (
		<div className="host_vans_container">
			<h2>Your listed vans</h2>
			{hostVans}
		</div>
	)
}

export default HostVans