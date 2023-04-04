import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Description: This is the entry point of the app. It is responsible for rendering the App component to the DOM.
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
)
