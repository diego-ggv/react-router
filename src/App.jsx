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
import VanDetails, { loader as vanDetailLoader }from "./pages/Vans/VanDetails.jsx"
import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Host/HostVanIncome.jsx"
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans.jsx"
import HostVanDetails, { loader as hostVanDetailLoader }from "./pages/Host/HostVanDetails.jsx"
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
import "./data/server.js" // Placeholder server using MirageJs

// IMPORT STYLES
// ==============================
import "./css/App.css"

function App() {
	// TODO: change the subject form vans to MTBs and personalize styles.
	
	// ROUTER 
	// ==============================
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route 
				path="/" 
				element={<Layout />}
			>
				<Route 
					index 
					element={ <Home /> } 
				/>
				<Route
					path="vans"
					element={ <Vans /> }
					errorElement={ <Error /> }
					loader={ vansLoader }
				/>
				<Route 
					path="vans/:id" 
					element={ <VanDetails /> } 
					loader={ vanDetailLoader }
				/>
				<Route 
					path="about" 
					element={ <About /> } 
				/>
				<Route 
					path="login" 
					element={ <Login /> } 
				/>
				<Route
					path="host"
					element={ <HostLayout /> }
					loader={ async () => {
						
						return null
					} }
				>
					<Route 
						index 
						element={ <Dashboard /> } 
					/>
					<Route
						path="income"
						element={ <Income /> }
						loader={ async () => {
							
							return null
						} }
					/>
					<Route
						path="reviews"
						element={ <Reviews /> }
						loader={ async () => {
							
							return null
						} }
					/>
					<Route
						path="vans"
						element={ <HostVans /> }
						loader={ hostVansLoader }
					/>
					<Route
						path="vans/:id"
						element={ <HostVanDetails /> }
						loader={ hostVanDetailLoader }
					>
						<Route
							index
							element={ <HostVanInfo /> }
							loader={ async () => {
								
								return null
							} }
						/>
						<Route
							path="pricing"
							element={ <HostVanPricing /> }
							loader={ async () => {
								
								return null
							} }
						/>
						<Route
							path="photos"
							element={ <HostVanPhotos /> }
							loader={ async () => {
								
								return null
							} }
						/>
					</Route>
				</Route>
				<Route path="*" element={ <NotFoundPage /> } />
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