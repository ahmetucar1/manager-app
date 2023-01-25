import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const navigate = useNavigate()
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://manageerr.netlify.app/login" 
			const { data: res } = await axios.post(url, data);
		    localStorage.setItem("token", JSON.stringify(res.data))
			navigate("/main")
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="flex justify-center flex-col items-center h-screen">
         <h1 className="text-3xl font-bold "> GİRİŞ YAP </h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            className="border rounded-md border-gray-400 p-2 w-full"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            className="border rounded-md border-gray-400 p-2 w-full"
            type="password"
            name="password"
            autoComplete="on"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button 
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">Login
         </button>
        <Link to={"/signup"}>
         <button className="flex text-indigo-500 mt-5">Hesabın Yok mu? Üye Ol!</button>
        </Link>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
	);
};

export default Login;