import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi"; 
import { FaSignOutAlt } from "react-icons/fa"; 
import { BiEdit } from "react-icons/bi"; 

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login")
    };
    
  return (
    <div className="fixed bg-blue-500 h-full">
    <nav className="px-4 py-2">
        <Link to={"/main"}>
        <button className="block pb-2 text-black">
            <HiHome className="w-8 h-8 mr-2 mt-2 hover:text-white" />
        </button>
        </Link>
        <Link to={"/editor"}>
        <button className="block mt-2 text-black">
            <BiEdit className="w-8 h-8 mr-2 mt-2 hover:text-white" />
        </button>
        </Link>
        <button className="block mt-6 pb-2 text-black" onClick={handleLogout}>
            <FaSignOutAlt className="w-6 h-8 ml-1 hover:text-white" />
        </button>
    </nav>
  </div>
  )
}

export default Navbar
