import React from 'react'
import Home from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
    return (
        <div className="bg-gray-200 min-h-screen font-sans">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
}
export default App
