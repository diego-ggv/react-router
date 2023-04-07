import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function HostVanInfo() {
  const { id } = useParams()
  const [van, setVan] = useState(null)

  useEffect(() => {
		fetch(`/api/host/vans/${id}`)
			.then(res => res.json())
			// .then(data => setVan(data.vans))
			.then(data => console.log(data.vans))
			.catch(err => console.log(err))
	}, [id])
  
  return (
    <>
      <h4>Name: <span className="text-lighter">{ van.name }</span></h4>
    </>
  )
}

export default HostVanInfo 