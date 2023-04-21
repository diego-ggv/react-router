import { useState } from "react"
// import { useNavigate } from "react-router-dom"

export default function Login() {
  // REACT HOOKS
  // ==============================
  const [ loginFormData, setLoginFormData ] = useState({ email: "", password: ""})
  
  // FUNCTIONS
  // ==============================
  function handleSubmit(e) {
    e.preventDefault()
    console.log(loginFormData)
  }

  function handleCHange(e) {
    const { name, value } = e.target
    setLoginFormData(prev => ({
      ...prev,
      [ name ]: value
    }))
  }

  // RENDER
  // ==============================
  return (
		<div className="login-container">
			<h1>Sign in to your account</h1>
			<form onSubmit={handleSubmit} className="login-form">
				<input
					name="email"
					onChange={handleCHange}
					type="email"
					placeholder="Email Address"
					value={loginFormData.email}
				/>
				<input
					name="password"
					onChange={handleCHange}
					type="password"
					placeholder="Password"
					value={loginFormData.password}
				/>
				<button>Login</button>
			</form>
		</div>
	)
}
