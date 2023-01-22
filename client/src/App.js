import { Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from 'react'
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Editor from "./components/Editor"
import {  useNavigate } from "react-router-dom";
import DataContext from "./DataContext";
import data from './data'


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
		<DataContext.Provider value={{data}}>
        <Routes>
            {user ? 
            <React.Fragment>
                <Route path="/" element={<Main />} />
                <Route path="/main" element={<Main />} />
                <Route path="/editor" element={<Editor />} />
            </React.Fragment> 
            : 
            <React.Fragment>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </React.Fragment>
            }
        </Routes>
    </DataContext.Provider>
	);
}

export default App;
