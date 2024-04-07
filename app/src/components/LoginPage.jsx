import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const LoginPage = () => {
  let navigate = useNavigate();
  const[loginData, setLoginData] = useState({ userName: '', password: ''})


  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData(prevVal => ({...prevVal, [name]: value}))
  }

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(loginData)
    navigate("/messages")
  }


  return (
    <div class="flex justify-center items-center h-screen">
<div class="w-full max-w-xs">
  <form onSubmit={handleLogin} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="username" 
      placeholder="Username"
      value={loginData.userName} 
      type='text'
      name='userName'
      onChange={handleChange}></input>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="password" 
      placeholder="******************"
      value={loginData.password} 
      type='password'
      name='password'
      onChange={handleChange}></input>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
    </div>
  </form>
</div>
</div>

    
  );
};

export default LoginPage;
