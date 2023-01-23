import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Signup = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    minLength: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSymbol: false
  });

  const checkPasswordValidation = (e) => {
    const { value } = e.target;
    setPasswordValidations({
      minLength: value.length >= 8,
      hasUpper: /[A-Z]/.test(value),
      hasLower: /[a-z]/.test(value),
      hasNumber: /[0-9]/.test(value),
      hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(value)
    });
  };



	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/api/signup/"; 
			const { data: res } = await axios.post(url, data);
			setSuccess(true)
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
            onKeyUp={checkPasswordValidation}
            onClick={() => setShowRequirements(!showRequirements)}
          />

            </div>
            <button className="bg-indigo-500 text-center text-white py-2 px-4 rounded-lg hover:bg-indigo-600">Register</button>
            <Link to={"/login"}>
            <button className="flex text-indigo-500 mt-5">Hesabın Var mı? Giriş yap!</button>
            </Link>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500 mt-4">Kayıt Başarılı</p>}
            {showRequirements ? (
            <div className="block mt-10 ml-8">
            <p className="block">Şifre Gereksinimleri:</p>
            <span className={`block mt-3 ${passwordValidations.minLength ? 'font-normal' : 'font-extralight'}`}>Şifre en az 8 karakterden oluşmalıdır</span>
            <span className={`block mt-1 ${passwordValidations.hasUpper ? 'font-normal' : 'font-extralight'}`}>Şifre en az bir büyük harf içermelidir.</span>
            <span className={`block mt-1 ${passwordValidations.hasLower ? 'font-normal' : 'font-extralight'}`}>Şifre en az bir küçük harf içermelidir.</span>
            <span className={`block mt-1 ${passwordValidations.hasNumber ? 'font-normal' : 'font-extralight'}`}>Şifre en az bir rakam içermelidir.</span>
            <span className={`block mt-1 ${passwordValidations.hasSymbol ? 'font-normal' : 'font-extralight'}`}>Şifre en az bir sembol içermelidir.</span>
            </div>
            ) : null}
            </div>
	);
};

export default Signup;