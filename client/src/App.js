import { Route, Routes, Navigate } from "react-router-dom";
import {useState, useEffect} from 'react'
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import {  useNavigate } from "react-router-dom";



function App() {
	
	const navigate = useNavigate();
    const [user, setUser] = useState(null);

   useEffect(() => {
	const token = localStorage.getItem("token");
	setUser(token)
	if (!token) 
	navigate()
   }, [navigate]);

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			{user && <Route path="/main" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
