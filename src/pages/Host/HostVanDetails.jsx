import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"

function HostVanDetails() {
  const {id} = useParams()
  const [van, setVan] = useState(null)

  useEffect(() => {
		fetch(`/api/host/vans/${id}`)
			.then(res => res.json())
			.then(data => setVan(data.vans))
			.catch(err => console.log(err))
	}, [id])

  return (
		<section className="host-van-detail-section">
			<Link to="../vans"
			className="back-button">&larr; Back to all vans</Link>
			{van ? (		
					<section>
						<div className="host-van-detail-layout-container">
							<div className="host-van-detail">
								<img src={van.imageUrl} />
								<div className="host-van-detail-info-text">
									<i className={`van__type ${van.type}`}>
										{van.type}
									</i>
									<h3>{van.name}</h3>
									<h4>${van.price}/day</h4>
								</div>
							</div>
						</div>
					</section>
			) : (
				<h2>Loading...</h2>
			)}
		</section>
	) 
}

export default HostVanDetails