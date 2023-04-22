import React from 'react'
import { useRouteError } from "react-router-dom"

function Error() {
  const error = useRouteError()
  console.log(error)
  
  return (
		<div className="error">
			<h1 className="not-found">Error: {error.message}</h1>
			<pre className="text-lighter">
				{error.status} - {error.statusText}
			</pre>
		</div>
	)
}

export default Error