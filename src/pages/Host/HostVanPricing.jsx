import React from 'react'
import { useOutletContext } from "react-router-dom"

function HostVanPricing() {
  const { van } = useOutletContext()

  return (
		<h4>
			Pricing:
      <span className="text-lighter">${ van.price }/day</span>
      &nbsp; - &nbsp;
			<span className="text-lighter">${van.price * 5 }/week</span>
		</h4>
	)
}

export default HostVanPricing