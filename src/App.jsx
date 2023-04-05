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
	// TODO: change the subgect form vans to MTBs and persolize styles.

	//BUG: multiple nested pages doesnot work when deployed in netlify. When reloading the page on a nested route, the page does not load and I get a MIME TYPE error. I think is a problem with vite. //NOTE: adding <base href="/" /> to the index.html head fixed the problem only while runing dev but not when deploying.

	/**
	 * Challenge: add the /host/vans and /host/vans/:id routes, as well
	 * as the "Vans" link in the Host navbar.
	 *
	 * For now, just create the stubbed-out version of the pages (i.e.
	 * components that just render an <h1>). Don't worry about adding
	 * navigation from /host/vans to /host/vans/:id yet - the link to
	 * /host/vans is enough for now.
	 *
	 * When deciding whether or not to use nested routes, keep in mind
	 * what will/won't be shared between these two pages. See the Figma
	 * design file (or the screenshots) to help guide your choice.
	 */

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="vans" element={<Vans />} />
					<Route path="vans/:id" element={<VanDetails />} />
					<Route path="about" element={<About />} />
					<Route path="host" element={<HostLayout />}>
						<Route index element={<Dashboard />} />
						<Route path="income" element={<Income />} />
						<Route path="hostVans" element={<HostVans />}>
							<Route path=":id" element={<HostVanDetails />} />
						</Route>
						<Route path="reviews" element={<Reviews />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App