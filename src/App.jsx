import React from 'react'
import Home from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
    return (
        <div className="font-sans">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </div>
    )
}
export default App
