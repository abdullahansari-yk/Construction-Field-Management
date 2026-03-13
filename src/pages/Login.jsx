import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "test@test.com" && password === "123456") {
            navigate("/projects")
        } else {
            setError("Please check email or password")
            console.log("Please check email or password")

        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-1">
                        <label
                            htmlFor="email"
                            className="block text-xl font-medium text-slate-700"
                        >
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="test@test.com"
                            className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="space-y-1">
                        <label
                            htmlFor="password"
                            className=" text-xl font-medium text-slate-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="123456"
                            className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && <p className="text-red-500">{error}</p>}

                    <button
                        type="submit"
                        className="w-full inline-flex justify-center items-center rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
                    >
                        Login
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Login;