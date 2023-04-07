import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function HostVans() {
	// REACT HOOKS
	// ==============================
	const [vans, setVans] = useState([])

	useEffect(() => {
		fetch("/api/host/vans")
			.then(res => res.json())
			.then(data => setVans(data.vans))
			.catch(err => console.log(err))
	}, [])


	//	RENDER
	// ==============================
	const hostVans = vans.map(van => {
		return (
			<div key={van.id} className="host_van">
				<Link to={`/host/vans/${van.id}`} >
					<img src={van.imageUrl} alt={van.name} />
					<div>
						<h2>{van.name}</h2>
						<p>${van.price}/day</p>
					</div>
				</Link>
			</div>
		)
	})

	return (
		<div className="host_vans_container">
			<h2>Your listed vans</h2>
			{hostVans}
		</div>
	)
}

export default HostVans