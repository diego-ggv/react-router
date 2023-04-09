import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"

function Vans() {
	// REACT HOOKS
	// ==============================
	const [searchParams, setSearchParams] = useSearchParams()
	const [vans, setVans] = useState([])

	useEffect(() => {
		fetch("/api/vans") // fetch returns a promise
			.then(res => res.json()) // res.json() returns a promise
			.then(data => setVans(data.vans)) // data.vans is an array of objects
			.catch(err => {
				console.log(err) // if there is an error, it will be logged in the console
			})
	}, [])

	// FILTER
	// ==============================
	const typeFilter = searchParams.get("type")

	const filterVans = typeFilter
		? vans.filter(van =>
			
			
			van.type === typeFilter)
		: vans

	// FUNCTIONS
	// ==============================
	const vanList = filterVans.map(van => (
		<div key={van.id} className="van">
			<Link
				to={van.id}
				state={{
					search: `?${searchParams.toString()}`,
					type: typeFilter,
				}}
			>
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
			<div className="van-list-filter-buttons">
				<button
					className={`van__type simple ${
						typeFilter === "simple" ? "selected" : ""
					}`}
					onClick={() => {
						setSearchParams({ type: "simple" })
						console.log("Searching for simple vans")
					}}
				>
					Simple
				</button>
				<button
					className={`van__type rugged ${
						typeFilter === "rugged" ? "selected" : ""
					}`}
					onClick={() => {
						setSearchParams({ type: "rugged" })
						console.log("Searching for rugged vans")
					}}
				>
					Rugged
				</button>
				<button
					className={`van__type luxury ${
						typeFilter === "luxury" ? "selected" : ""
					}`}
					onClick={() => {
						setSearchParams({ type: "luxury" })
						console.log("Searching for luxury vans")
					}}
				>
					Luxury
				</button>

				{typeFilter && (
					<button
						className="van__type clear__filters"
						onClick={() => setSearchParams({})}
					>
						Clear Filter
					</button>
				)}
			</div>
			<div className="van__list">{vanList}</div>
		</main>
	)
}

export default Vans
