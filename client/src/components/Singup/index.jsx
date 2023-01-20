import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/api/signup/"; 
			const { data: res } = await axios.post(url, data);
			setSuccess(true)
			navigate("/login");
			console.log(res.message);
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
       <h1 className="text-3xl font-bold "> ÜYE OL </h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            className="border rounded-md border-gray-400 p-2 w-full"
            type="text"
            name="name"
            value={data.name}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            className="border rounded-md border-gray-400 p-2 w-full"
            type="email"
            name="email"
            value={data.email}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            className="border rounded-md border-gray-400 p-2 w-full"
            type="password"
            name="password"
            required
            autoComplete="on"
            value={data.password}
            onChange={handleChange}
            />
            </div>
            <button className="bg-indigo-500 text-center text-white py-2 px-4 rounded-lg hover:bg-indigo-600">Register</button>
            <Link to={"/login"}>
            <button className="flex text-indigo-500 mt-5">Hesabın Var mı? Giriş yap!</button>
            </Link>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">Kayıt Başarılı</p>}
            </div>
	);
};

export default Signup;