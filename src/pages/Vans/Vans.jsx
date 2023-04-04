import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Vans() {
	// REACT HOOKS
	// ==============================
	const [vans, setVans] = useState([])

	useEffect(() => {
		fetch("/api/vans") // fetch returns a promise
			.then(res => res.json()) // res.json() returns a promise
			.then(data => setVans(data.vans)) // data.vans is an array of objects
			.catch(err => {
				console.log(err)
			})
	}, [])

	// FUNCTIONS
	// ==============================
	// vanList displays all the vans from the API
	const vanList = vans.map(van => (
		<div key={van.id} className="van">
			<Link to={`/vans/${van.id}`}>
				<img src={van.imageUrl} alt={van.name} />
				<div className="van__info">
					<h2>{van.name}</h2>
					<p>
						${van.price} <span>/day</span>
					</p>
				</div>
				<i className={`van__type ${van.type} selected`}>{van.type}</i>
			</Link>
		</div>
	))

// RENDER
// ==============================
return (
		<main className="van__container">
			<h1>Explore our van options</h1>
			<div className="van__list">{vanList}</div>
		</main>
	)
}

export default Vans
