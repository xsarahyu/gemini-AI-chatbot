import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import GoogleButton from 'react-google-button'

const LoginPage = () => {
  let navigate = useNavigate()
  const [loginData, setLoginData] = useState({ userName: '', password: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setLoginData(prevVal => ({ ...prevVal, [name]: value }))
  }

  const handleLogin = (event) => {
    event.preventDefault()
    console.log(loginData)
    navigate('/messages')
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              value={loginData.userName}
              type="text"
              name="username"
              onChange={handleChange}></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              value={loginData.password}
              type="password"
              name="password"
              onChange={handleChange}></input>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
          </div>
          <div className="flex justify-center mt-5">
            <GoogleButton onClick={() => { window.open("http://localhost:8420/google") }} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
