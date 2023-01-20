import React from "react";
import { HiHome } from "react-icons/hi"; 
import { FaSignOutAlt } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

const Main = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login")
    };

    return (
        <div>
            <nav className="fixed h-full left-0 w-20 bg-blue-500">
                <div className="px-4 py-2">
                    <button href="/" className="block pb-2 text-black">
                        <HiHome className="w-8 h-8 mr-2 hover:text-white" />
                    </button>
                    <button className="block mt-6 pb-2 text-black" onClick={handleLogout}>
                        <FaSignOutAlt className="w-6 h-8 ml-1 hover:text-white" />
                    </button>
                </div>
            </nav>
			<div className="fixed h-full left-20 w-80 bg-gray-200 overflow-y-scroll">
               <div className="ml-2 mt-4 ">
			   <h1 className="font-black">Field Selection</h1>
			   <p className="mt-1 font-normal">Choose what fields you want displayed on the table</p>
			   </div>
               <div className="mt-20">
			   <label className="block mt-2 ml-6 font-semibold" htmlFor="field">Select a field</label>
			   <input className="mt-5 ml-6 w-60 h-40 bg-gray-100 text-top align-top overflow-y-scroll" type="text" />
			   </div>
			</div>
        </div>
    );
};

export default Main;

