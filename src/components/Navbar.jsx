import { Link, useNavigate } from 'react-router-dom'
import { React,useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
// import { ChevronUp, ChevronDown } from 'lucide-react';

const Navbar = () => {

  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);
  const {showModal,setShowModal} = useState(false);

  const navigate = useNavigate();

  const confirmlogout = () =>{
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setShowModal(false);
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
          {isLoggedIn?<button onClick={()=>setShowModal(true)} className='text-blue-900  font-bold font-serif cursor-pointer'>Logout</button>:<Link to='/login' className='text-blue-900  font-bold font-serif'>Login</Link>}
        </div>

      </div>
      <hr></hr>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Confirm Logout</h3>
            <p className="mt-2 text-sm text-gray-500">Are you sure you want to log out of your account?</p>
            
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                Cancel
              </button>
              <button onClick={confirmlogout} className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700">
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
