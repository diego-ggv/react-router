import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

function VanDetails() {
	// REACT HOOKS
	// ==============================
	const params = useParams()
	const location = useLocation()
	const [van, setVan] = useState(null)

	useEffect(() => {
		fetch(`/api/vans/${params.id}`)
			.then(res => res.json())
			.then(data => setVan(data.vans))
			.catch(err => console.log(err))
	}, [params.id])

	// SEARCH PARAMS
	// ==============================
	const search = location.state?.search || ""
	const vanType = location.state?.type || "all"
	console.log(vanType)

	//  RENDER
	// ==============================
	return (
		<main className="van-detail-container">
			<Link
				relative="path"
				to={`..${search}`}
				className="back-button">
				&larr; Back to {vanType} vans
			</Link>

			{van ? (
				<div className="van-detail">
					<img src={van.imageUrl} />
					<i className={`van-type ${van.type} selected`}>{van.type}</i>
					<h2>{van.name}</h2>
					<p className="van-price">
						<span>${van.price}</span>/day
					</p>
					<p>{van.description}</p>
					<button className="link-button">Rent this van</button>
				</div>
			) : (
				<h2>Loading...</h2>
			)}
		</main>
	)
}

export default VanDetails