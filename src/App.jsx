/*  
  Description: This is the main component of the app. It is the parent of all other components. It is also the parent of the BrowserRouter component. This component is responsible for routing the user to the correct page.
*/

// IMPORT REACT
// ==============================
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
// IMPORT PAGES
// ==============================
import Layout from "./components/Layout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans/Vans.jsx"
import VanDetails from "./pages/Vans/VanDetails.jsx"
import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Host/Income.jsx"
import Reviews from "./pages/Host/Reviews.jsx"
// IMPORT COMPONENTS
// ==============================
// IMPORT STYLES
// ==============================
import "./data/server.js"
import './css/App.css'


function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/vans" element={<Vans />} />
					<Route path="/vans/:id" element={<VanDetails />} />
					<Route path="/about" element={<About />} />
					
          <Route path="/host" element={ <Dashboard /> }>
					  <Route path="/host/Income" element={<Income />} />
					  <Route path="/host/Reviews" element={<Reviews />} />
          </Route> 

				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App

