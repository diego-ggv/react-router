import React from 'react'
import { useRouteError } from "react-router-dom"

function Error() {
  const error = useRouteError()
  console.log(error)
  
  return (
    <>
    <h1 className="not-found">Error: {error.message}</h1>
    <pre>{error.status} - {error.statusText}</pre>
    </>
  )
}

export default Error