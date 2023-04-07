import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

function HostVanDetails() {
  const params = useParams()
  const [van, setVan] = useState(null)

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
      .catch(err => console.log(err))
  }, [params.id])

  return (
    <div className="host_van_detail">
      <img src={ van.imageUrl } alt={ van.name }/>
      
    </div>
  )
}

export default HostVanDetails