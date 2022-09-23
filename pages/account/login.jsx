import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    var data = {
      email: userName,
      password: password
    };

    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const fetchResponse = await fetch(`${baseUrl}/api/auth/login`, settings);
    const response = await fetchResponse.json();

    if (fetchResponse.status === 200) {
      localStorage.setItem("token", response.token);
      toast.success(response.message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      if(response.teacher == true) {
        router.push("/teacher");
      } else { 
        router.push("/student");
      }
    } else {
      toast.error(response.message);
    }
  }

  return (
    <>
          <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

  <div className='flex justify-center bg-transparent  border-black border-2 m-6 rounded-lg flex-col w-min'>
    <h1 className='text-slate-900 rounded-md text-3xl m-5 p-2'>Login</h1>
    <div className='flex-col ml-5 mb-5'>
      <div className=''>
      <h3 className='text-slate-900 text-lg p-2 mb-1'>Username</h3>
        <input className='rounded-sm border-black border w-96 p-2 ml-2 mr-7' onChange={(e) => {
          setUserName(e.target.value)
        }} type="text" placeholder='Enter Username' />
      </div>
      <div className=''>
        <h3 className='text-slate-900 text-lg p-2 mb-1'>Password</h3>
        <input className='rounded-sm border-black border w-96 p-2 ml-2 mr-7' onChange={(e) => {
          setPassword(e.target.value)
        }} type="password" placeholder='Enter Password' />
    </div>
    </div>
    <div className='justify-center flex  mb-5'>
        
          <button onClick={handleLogin} class=" mt-4 bg-transparent text-slate-900 font-semibold  py-2 px-4 border border-black rounded">
              Login
          </button>
        
    </div>
  </div>
   
  </>
  )
}

export default Login