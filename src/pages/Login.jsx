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

  function handleChange(e) {
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
					onChange={handleChange}
					type="email"
					placeholder="Email Address"
					value={loginFormData.email}
				/>
				<input
					name="password"
					onChange={handleChange}
					type="password"
					placeholder="Password"
					value={loginFormData.password}
				/>
				<button>Login</button>
			</form>
		</div>
	)
}
