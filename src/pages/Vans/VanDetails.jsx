import { 
	Link, 
	useLocation, 
	useLoaderData, 
} from 'react-router-dom'
import {getVans} from '../../api/apiVans.js'

export function loader({ params}) {
	console.log(params)
	return getVans(params.id)
}

function VanDetails() {
	// REACT HOOKS
	// ==============================
	const location = useLocation()
	const van = useLoaderData()

	// SEARCH PARAMS
	// ==============================
	const search = location.state?.search || ""
	const vanType = location.state?.type || "all"

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
		
				<div className="van-detail">
					<img src={van.imageUrl} alt={`${van.name}`}/>
					<i className={`van-type ${van.type} selected`}>{van.type}</i>
					<h2>{van.name}</h2>
					<p className="van-price">
						<span>${van.price}</span>/day
					</p>
					<p>{van.description}</p>
					<button className="link-button">Rent this van</button>
				</div>
	
		</main>
	)
}

export default VanDetails