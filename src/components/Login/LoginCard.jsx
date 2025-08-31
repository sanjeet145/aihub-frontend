import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';
import Cookie from "js-cookie"
export default function LoginCard() {
    const navigate =useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        "username": "",
        "password": ""
    })
    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    const { login } = useAuth();
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault()
        if (formData.username.trim().length == 0 || formData.password.trim().length == 0) {
            setLoading(false);
            return alert("Invalid data")
        }
        try {
            const API_URL = import.meta.env.VITE_BACKEND_API_URL;
            const response = await fetch(`${API_URL}auth/login/`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            })
            const data = await response.json()
            if (response.status == 200) {
                login(data["token"]);
                setLoading(false);
                navigate("/hub");
            }
           else{
             alert("Login Failed")
           }
        } catch (error) {
            // console.error(error)
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <>
            <div className="container">
                <img src="/images/anime.png" alt="image" />
                <div className="card">
                    <div className="login">
                        <h1>Log In</h1>
                        <form>
                            <label htmlFor="uname">Username</label>
                            <input type="text" id="uname" name="username" value={formData.username} onChange={handleForm} />
                            <label htmlFor="passwd">Password</label>
                            <input type="password" id="passwd" name="password" value={formData.password} onChange={handleForm} />
                            <div className="buttons">
                                <button onClick={handleSubmit}>{loading ? "Loading..." : "Log In"}</button>
                            </div>
                        </form>
                        <p>Don't have Account <Link to={'/register'} id="register"> Sign Up</Link></p>
                    </div>
                    <div className='google-login'>Login with google</div>
                </div>
            </div>
        </>
    )
}
