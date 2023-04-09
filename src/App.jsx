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
import HostVans from "./pages/Host/HostVans.jsx"
import HostVanDetails from "./pages/Host/HostVanDetails.jsx"
import HostVanPricing from "./pages/Host/HostVanPricing.jsx"
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx"
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
import HostVanInfo from "./pages/Host/HostVanInfo.jsx"

function App() {
	// TODO: change the subject form vans to MTBs and personalize styles.



	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					// Main Nav
					<Route index element={<Home />} />
					<Route path="vans" element={<Vans />} />
					<Route path="vans/:id" element={<VanDetails />} />
					<Route path="about" element={ <About /> } />

					// Routes for Host
					<Route path="host" element={ <HostLayout /> }>
						<Route index element={<Dashboard />} />
						<Route path="income" element={<Income />} />
						<Route path="vans" element={ <HostVans /> } />

						// Routes for HostVanDetails
						<Route path="vans/:id" element={ <HostVanDetails /> }>
							<Route index element={ <HostVanInfo /> } />
							<Route path="pricing" element={ <HostVanPricing /> } />
							<Route path="photos" element={ <HostVanPhotos /> } />
						</Route>
						<Route path="reviews" element={<Reviews />} />
					</Route>j
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App