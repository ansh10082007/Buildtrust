import { Link, useNavigate } from 'react-router-dom'
import { React } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
// import { ChevronUp, ChevronDown } from 'lucide-react';

const Navbar = () => {

  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/")
  }

  return (
    <div>
      <div className='flex relative justify-between mt-3 mb-2'>

        {/* icon section */}
        <Link to="/" className='ml-5 text-slate-900 text-xl font-bold tracking-wide '>BuildTrust</Link>


        {/* this is navbar links */}
        <div className='flex gap-10 mr-10 text-base text-slate-700 font-medium tracking-tight'>
          <Link to='/'>Home</Link>
          <Link to='/liked'>Liked</Link>
          <Link to='/mostbuyed'>Most Buyed</Link>
          {isLoggedIn?<button onClick={logout} className='text-blue-900  font-bold font-serif cursor-pointer'>Logout</button>:<Link to='/login' className='text-blue-900  font-bold font-serif'>Login</Link>}
        </div>

      </div>
      <hr></hr>
    </div>
  )
}

export default Navbar
