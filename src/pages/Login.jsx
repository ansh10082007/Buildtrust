import React, { useContext, useState } from 'react'
import api from '../api/api'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import img from '../../public/loginPageImg.jpg'
import Navbar from '../components/Navbar';

const Login = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const { setIsLoggedIn } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("");


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/users/login", {
                email,
                password
            })
            localStorage.setItem("token", response.data.token);
            setIsLoggedIn(true);
            navigate("/")
        } catch (err) {
            const message = err.response.data.message;
            setErrorMsg(message);
        }
    }

    const verified = searchParams.get("verified");

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
                            Welcome back to BuildTrust
                        </h1>
                        <h2 className='text-purple-800 text-2xl font-bold font-sans mb-8'>
                            Login to your Account
                        </h2>
                        {verified !== null && (
                            <div>
                                {verified === "true"
                                    ? "Your email has been verified, please log in."
                                    : "Please verify your email by clicking the link sent to your inbox."}
                            </div>
                        )}
                        <form onSubmit={handleLogin} className='space-y-6'>
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
                                        if (errorMsg) {
                                            setErrorMsg("")
                                        }
                                    }}
                                    placeholder='Enter valid email address'
                                    className='w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-600'
                                />
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
                                        if (errorMsg) {
                                            setErrorMsg("")
                                        }
                                    }}
                                    placeholder='Enter password'
                                    className='w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-600'
                                />
                            </div>
                            {errorMsg && (<div className='text-red-700  font-medium font-serif'>{errorMsg}</div>)}
                            <button type="submit" className="w-full py-2.5 bg-purple-800 text-white font-semibold rounded shadow-md transition-all duration-200 hover:bg-purple-900 hover:shadow-lg">Login</button>
                            <div>
                                <h2 className='text-black font-mono'>New user?</h2>
                                <Link to="/register" className='text-blue-900 text-sm'>Create account here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login