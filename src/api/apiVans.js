export const getVans = async () => {
	const res = await fetch("/api/vans")
	if (!res.ok) {
		throw {
			message: "Failed to fetch vans",
			statusText: res.statusText,
			status: res.status,
		}
	}
	const data = await res.json()
	const vans = data.vans
	
	return vans 
}
