/*  
  Description: This is the main component of the app. It is the parent of all other components. It is also the parent of the BrowserRouter component. This component is responsible for routing the user to the correct page.
*/

// IMPORT REACT
// ==============================
import { BrowserRouter, Routes, Route } from "react-router-dom"

// IMPORT PAGES
// ==============================
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans/Vans.jsx"
import VanDetails from "./pages/Vans/VanDetails.jsx"
import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Host/Income.jsx"
import Reviews from "./pages/Host/Reviews.jsx"

// IMPORT COMPONENTS
// ==============================
import Layout from "./components/Layout.jsx"
import HostLayout from "./components/HostLayout.jsx"

// IMPORT SERVER
// ==============================
import "./data/server.js"
// import "./data/data.json"

// IMPORT STYLES
// ==============================
import "./css/App.css"

function App() {
	// BUG: the nested routes are not properly working. When reloading the page on a nested route, the page does not load and I get a MIME TYPE error. I think is a problem with vite. I will try to fix it later.

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/"element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="vans" element={<Vans />} />
					<Route path="vans/:id" element={<VanDetails />} />
					<Route path="about" element={<About />} />

					<Route path="host" element={<HostLayout />}>
						<Route index element={<Dashboard />} />
						<Route path="income" element={<Income />} />
						<Route path="reviews" element={<Reviews />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App