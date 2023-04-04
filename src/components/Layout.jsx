// Description: This is the layout component that will be used to wrap all the other components

// IMPORT REACT
// ==============================
import React from 'react'
import { Outlet } from 'react-router-dom'
// IMPORT COMPONENTS
// ==============================
import Header from './Header.jsx'
import Footer from './Footer'


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout