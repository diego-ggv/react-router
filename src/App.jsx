/* 
  Description: This is the main component of the app. 
	It is the parent of all other components. 
	This component is responsible for routing the user to the correct page.
*/

// IMPORT REACT-ROUTER-DOM
// ==============================
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from "react-router-dom"

// IMPORT PAGES
// ==============================
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans.jsx"
import VanDetails from "./pages/Vans/VanDetails.jsx"
import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Host/HostVanIncome.jsx"
import HostVans from "./pages/Host/HostVans.jsx"
import HostVanDetails from "./pages/Host/HostVanDetails.jsx"
import HostVanInfo from "./pages/Host/HostVanInfo.jsx"
import HostVanPricing from "./pages/Host/HostVanPricing.jsx"
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx"
import Reviews from "./pages/Host/Reviews.jsx"
import Login from "./pages/Login.jsx"

// IMPORT COMPONENTS
// ==============================
import Layout from "./components/Layout.jsx"
import HostLayout from "./components/HostLayout.jsx"

// IMPORT ERROR
import Error from "./components/Error.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"

// IMPORT SERVER
// ==============================
import "./data/server.js" // Dummy server using miragejs

// IMPORT STYLES
// ==============================
import "./css/App.css"

function App() {
	// TODO: change the subject form vans to MTBs and personalize styles.
	// BUG: When receiving an error the the app won't display the correct error message

	// ROUTER 
	// ==============================
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route
					path="vans"
					element={<Vans />}
					errorElement={<Error />}
					loader={ vansLoader }
				/>
				<Route path="vans/:id" element={<VanDetails />} />
				<Route path="about" element={<About />} />
				<Route path="login" element={<Login />} />
				<Route path="host" element={<HostLayout />}>
					<Route index element={<Dashboard />} />
					<Route path="income" element={<Income />} />
					<Route path="vans" element={<HostVans />} />
					<Route path="vans/:id" element={<HostVanDetails />}>
						<Route index element={<HostVanInfo />} />
						<Route path="pricing" element={<HostVanPricing />} />
						<Route path="photos" element={<HostVanPhotos />} />
					</Route>
					<Route path="reviews" element={<Reviews />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		)
	)
	
	// RENDER
	// ==============================
	return (
		<RouterProvider router={ router } />
	)
}

export default App