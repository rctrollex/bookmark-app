import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {account} from "../appwrite/appwriteConfig.js";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage]=useState('');
    const [successMessage, setSuccessMessage]=useState('');
    const [isLoading, setIsLoading]= useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if(!email || !password){
            return setErrorMessage('Please insert all fields.');
        }
        setErrorMessage('');
        setSuccessMessage('');
        setIsLoading(true);
        try{
            await account.createEmailPasswordSession(email, password);
            setSuccessMessage('Successfully logged in. Redirecting...');
            setEmail('');
            setPassword('');
            setTimeout(() => {
                navigate('/dashboard');
            })
        }catch (e) {
            console.log("Login Error: ", e);
            const errorMessages = {
                'user_not_found': 'User not found.',
                'invalid_email': 'Please enter a valid email address.',
                'invalid_password': 'Wrong password or email.',
                'general_argument_invalid': 'Please check your input fields.',
                default: e.message || 'An error occurred during login.'};
            setErrorMessage(errorMessages[e.code] || errorMessages.default);
            if(e.code === 'invalid_email' || e.code === 'invalid_password') {
                setPassword('');
            }
        }finally {
            setIsLoading(false)
        }
    }
    return (
        <div className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen flex justify-center items-center">
            <div className="container mx-auto px-4 max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Log In to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Bookmark Haven</span></h2>
                    <div className="space-y-4">
                        <form onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full p-3 mt-1 rounded-lg border-0 shadow-md bg-gray-100 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-300 mb-4"
                                    value={email}
                                    disabled={isLoading}
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="•••••••"
                                    className="w-full p-3 mt-1 rounded-lg border-0 shadow-md focus:ring-2 focus:outline-none focus:ring-indigo-600 bg-gray-100 transition-all duration-300s mb-4"
                                    value={password}
                                    disabled={isLoading}
                                    autoComplete="current-password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 p-3 mt-1 rounded-lg shadow-lg cursor-pointer hover:from-blue-800 hover:to-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isLoading}>
                                {isLoading ? 'Logging in...' : 'Login'}
                            </button>
                            <div className="text-center">
                                <p className="text-gray-600">Don't have an account? <Link to="/signup" className="text-indigo-600">Sign Up</Link></p>
                                <p className="text-indigo-600"><Link to="/">Back to Home</Link></p>
                            </div>
                            <div className="text-center mt-4">
                                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                                {successMessage && <p className="text-green-600">{successMessage}</p>}
                            </div>
                        </form>

                    </div>
                </div>


            </div>

        </div>
    )
}
export default Login
