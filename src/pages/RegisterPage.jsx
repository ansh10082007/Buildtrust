import React, { useState } from 'react'
import api from "../api/api"
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import img from '../../public/loginPageImg.jpg'



const registerPage = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [errorMsg, setErrorMsg] = useState({})

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        setErrorMsg({
          confirmPassword: "password doesn't match"
        })
        return;
      }
      const response = await api.post("/users/register", {
        name,
        email,
        password
      })
      console.log(response.data.message);
      navigate("/login?verified=false");
    } catch (error) {
      let obj = {};
      const err = error.response.data;
      err.forEach((b) => {
        obj = {
          ...obj,
          [b.path]: b.msg,
        }
      })
      setErrorMsg(obj)
    }
  }

  return (
    <div>
      <Navbar />
      <div className='flex h-screen w-full'>
        <div className='w-1/2 h-full p-3'>
          <img src={img} alt="login visual" className='h-full w-full object-cover rounded' />
        </div>
        <div className='w-1/2 h-full flex flex-col justify-center p-12 bg-white'>
          <div className='max-w-md mx-auto w-full'>
            <h1 className='text-black text-3xl font-bold font-serif mb-2'>
              Welcome to BuildTrust
            </h1>
            <h2 className='text-purple-800 text-2xl font-bold font-sans mb-8'>
              Create your Account
            </h2>
            <form onSubmit={handleRegister} className='space-y-6'>
              <div>
                <label htmlFor='name-input' className='block text-sm font-medium mb-2'>
                  Enter your name:
                </label>
                <input
                  id='name-input'
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    const {name,...remainingErrors} = errorMsg;
                    setErrorMsg(remainingErrors);
                  }}
                  placeholder='Enter your name'
                  className='w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-600'
                />
                {errorMsg.name && <h3 className='text-red-500 font-medium text-sm font-serif'>{errorMsg.name}*</h3>}
              </div>
              <div>
                <label htmlFor="email-input" className="block text-sm font-medium mb-2">
                  Enter your email:
                </label>
                <input
                  id="email-input"
                  type='email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    const {email,...remainingErrors} = errorMsg;
                    setErrorMsg(remainingErrors);
                  }}
                  placeholder='Enter valid email address'
                  className='w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-600'
                />
                {errorMsg.email && <h3 className='text-red-500 font-medium text-sm font-serif'>{errorMsg.email}*</h3>}
              </div>
              <div>
                <label htmlFor="user-password" className="block text-sm font-medium mb-2">
                  Enter your password:
                </label>
                <input
                  id='user-password'
                  type='password'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    const {password,...remainingErrors} = errorMsg;
                    setErrorMsg(remainingErrors);
                  }}
                  placeholder='Enter password'
                  className='w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-600'
                />
                {errorMsg.password && <h3 className='text-red-500 font-medium text-sm font-serif'>{errorMsg.password}*</h3>}
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium mb-2">
                  Confirm your password:
                </label>
                <input
                  id='confirm-password'
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    const {confirmPassword,...remainingErrors} = errorMsg;
                    setErrorMsg(remainingErrors);
                  }}
                  placeholder='Enter password'
                  className='w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-600'
                />
                {errorMsg.confirmPassword && <h3 className='text-red-500 font-medium text-sm font-serif'>{errorMsg.confirmPassword}*</h3>}
              </div>
              <button type="submit" className="w-full py-2.5 bg-purple-800 text-white font-semibold rounded shadow-md transition-all duration-200 hover:bg-purple-900 hover:shadow-lg">Register</button>
              <div className='bg-gray-50 border border-gray-100 p-5'><h1 className='text-slate-600 font-medium font-serif'>! After clicking register,go to your gmail and verify your identity please</h1></div>
              <div>
                <h2 className='text-black font-mono'>Already have an account?</h2>
                <Link to="/login" className='text-blue-900 text-sm'>Login your account here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default registerPage
