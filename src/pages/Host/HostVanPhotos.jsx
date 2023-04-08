import React from 'react'
import { useOutletContext } from "react-router-dom"

function HostVanPhotos() {
  const { van } = useOutletContext()

  return (
    <img
      src={ van.imageUrl }
      alt={ van.name }
      className="host-van-photos"   
    />
  )
}

export default HostVanPhotos