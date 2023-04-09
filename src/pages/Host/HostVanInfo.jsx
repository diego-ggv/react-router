import { useOutletContext } from "react-router-dom"

function HostVanInfo() {
		const { van } = useOutletContext()
	
		return (
			<>
				<h4>
					Name: <span className="text-lighter">{van.name} </span>
				</h4>
				<h4>
					Category: <span className="text-lighter">{van.type}</span>
				</h4>
				<h4>
					Description: <span className="text-lighter">{van.description}</span>
				</h4>
				<h4>
					Visibility: <span className="text-lighter">Public</span>
				</h4>
			</>
		)
  
}

export default HostVanInfo 