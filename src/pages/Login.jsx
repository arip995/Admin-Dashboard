import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();
    const handleSubmit = () => {
        localStorage.setItem("user", JSON.stringify({ email: email.current.value, password: password.current.value }));
        window.location.reload(true)
    }
    return (
        <div className="w-1/3 m-6">
            <input type='text' placeholder='email' class="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" ref={email}></input>
            <input type='password' placeholder='password' class="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" ref={password}></input>
            <button className='px-6 mt-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80' onClick={() => handleSubmit()}>Submit</button>
        </div>
    )
};

export default Login;