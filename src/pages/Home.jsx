import { Link } from "react-router-dom"

function Home() {
  return (
		<main className="home">
			<div className="home_text">
				<h1>You got the travel plans, we got the travel vehicles.</h1>
				<p>
					Add adventure to your life by joining the #VANLIFE movement. Rent
					the perfect element to make your perfect road trip.
				</p>
			</div>
			<Link to="/vans" className="button__find">
				Find your Van
			</Link>
		</main>
	)
}

export default Home