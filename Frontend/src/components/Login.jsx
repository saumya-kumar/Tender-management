/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import Input from "./Input.jsx"
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice.js'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const login = async (data) => {
        
        setError("")
        const Info = {
            "person": data.person,
            "email": data.email,
            "password": data.password,
        }
        setError("")
        try {
            const response = await axios.post("http://localhost:3000/api/v1/login", Info);
            if (response) {
                dispatch(authLogin(response));
                navigate("/");
            }
            setError(response.data.message);
        } catch (error) {
            setError(error.response.data.data);
        }
    }

    return (
        <div className='flex w-full min-h-screen pt-10 bg-gray-900'>
            <div className="mx-auto w-full h-full max-w-lg bg-gray-800 rounded-xl p-10 shadow-lg transition-transform duration-300 transform hover:scale-[1.02]">
                <div className="mb-6 flex justify-center">
                    <h2 className="text-3xl font-extrabold text-gray-100">Sign in to your account</h2>
                </div>
                <p className="text-center text-gray-400 mb-4">
                    Don&apos;t have an account?&nbsp;
                    <Link
                        to="/signup"
                        className="text-blue-500 font-medium hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8 space-y-5'>
                    <Input
                        label="Are you Admin / Vendor: "
                        placeholder="Enter your Designation"
                        {...register("person", { required: true })}
                        className="bg-gray-700 text-gray-100 placeholder-gray-400 border border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                            },
                        })}
                        className="bg-gray-700 text-gray-100 placeholder-gray-400 border border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="relative">
                        <Input
                            label="Password: "
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            {...register("password", { required: true })}
                            className="bg-gray-700 text-gray-100 placeholder-gray-400 border border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 top-1/3 pr-3 flex items-center text-gray-500 hover:text-blue-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
