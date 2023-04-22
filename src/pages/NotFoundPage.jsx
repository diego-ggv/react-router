import { Link } from "react-router-dom"

// 404 PAGE
// ==============================
function notFoundPage() {
	return (
		<div className="error">
			<h1>
				404 page not found! <br />
				<span className="text-lighter">
					Sorry, the page you were looking for was not found.
				</span>
			</h1>
			<Link to="/" className="not-found-button">
				Return to home
			</Link>
		</div>
	)
}

export default notFoundPage