import React, { use, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

export default function RegisterCard() {
    const navigate = Navigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        "username": "",
        "fullname": "",
        "number": "",
        "email": "",
        "password": "",
    })
    const [cfmpasswd, setCfmpasswd] = useState("");
    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        try {
            if (!formData.password.match(cfmpasswd)) {
                setLoading(false);
                return alert("password does not match")
            }
            if (formData.number.length != 10) {
                setLoading(false);
                return alert("Mobile number must be 10 digit")
            }
            if (formData.username.trim().length == 0 || formData.password.trim().length == 0 ||
                formData.fullname.trim().length == 0 || formData.email.trim().length == 0 || formData.number.trim().length == 0) {
                setLoading(false);
                return alert("Invalid data")
            }
            const API_URL = import.meta.env.VITE_BACKEND_API_URL;
            const response = await fetch(`${API_URL}auth/register/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json();
            if (response.status == 201) {
                navigate("/login");
            }
        } catch (error) {

        }
        finally {
            setLoading(false);
        }
    }
    return (
        <>
            <div class="container">
                <img src="/images/anime.png" alt="image" />
                <div class="card">
                    <div class="register">
                        <h1>Register</h1>
                        <form id="signupForm">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" onChange={handleForm} />
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" id="fullname" name="fullname" onChange={handleForm} />
                            <label htmlFor="number">Number</label>
                            <input type="number" id="number" name="number" onChange={handleForm} />
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={handleForm} />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" onChange={(e) => setCfmpasswd(e.target.value)} />
                            <label htmlFor="cfmpswd">Re-Type Password</label>
                            <input type="password" id="cfmpswd" onChange={handleForm} />
                            <div class="buttons">
                                <button onClick={handleSubmit}>{loading ? "Loading..." : "Register"}</button>
                            </div>
                        </form>
                        <p>Already have Account <Link to={'/login'} id="login">Sign in</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
