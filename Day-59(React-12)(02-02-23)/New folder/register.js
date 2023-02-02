import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import { useEffect } from "react";
export default function Register() {
    const [data, setData] = useState(null)
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState([]);


    const [registerData, setRegisterData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const navigate = useNavigate()
    useEffect(() => {
        if (data) {
            if (data.success) {
                setSuccessMsg("Registration Successful");
                setTimeout(() => {
                    navigate("/login")
                }, 2000)
            }
            else {
                setErrorMsg(data.message.split(". "));
            }
        }
    }, [data, navigate])


    const handleInput = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value })
    }

    const register = (e) => {
        e.preventDefault();
        if (registerData.fullname === "" || registerData.email === "" || registerData.password === "" || registerData.confirmPassword === "") {
            alert("Please Fill all the fields")
        }
        else {

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerData)
            }

            fetch("http://localhost:3000/auth/register", options)
                .then((res) => res.json())
                .then((result) => setData(result))
                .catch(e => console.log(e))

        }
    }

    return (
        <div className="container mb-5 mt-5">
            <div className="row justify-content-center align-items-center">
                <div id="register-column" className="col-md-6 ">
                    <div className="row justify-content-center align-items-center">
                        <div id="register-box" className="mt-5 col-md-7 border border-info rounded-top px-5 pb-5">
                            <h3 className="text-center text-info pt-5">Register</h3>
                            {successMsg && <div className="alert alert-success" role="alert">
                                {successMsg}
                            </div>}
                            {errorMsg && <div className="alert alert-danger" role="alert">
                                {errorMsg}
                            </div>}
                            <form onSubmit={register}>
                                <div className="form-group mt-5">
                                    <label className="text-info" htmlFor="fullname">Full Name</label>
                                    <input type="text" id="name" name="fullname" value={registerData.fullname} className="form-control" onChange={handleInput} />

                                </div>
                                <div className="form-group">
                                    <label className="text-info mt-3" htmlFor="email">Email address</label>
                                    <input type="email" id="email" name="email" value={registerData.email} className="form-control" onChange={handleInput} />

                                </div>
                                <div className="form-group">
                                    <label className="text-info mt-3" htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" value={registerData.password} className="form-control" onChange={handleInput} />
                                    
                                </div>
                                <div className="form-group">
                                    <label className="text-info mt-3" htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword" value={registerData.confirmPassword}
                                        className="form-control"
                                        onChange={handleInput} />
                                </div>

                                <div id="register-link" className="text-right mt-3">
                                    <p>
                                        Already have an account?
                                        <Link to="/login" className="text-info" style={{ textDecoration: "none" }}> Login here</Link>
                                    </p>
                                </div>

                                <div className="row mb-3">
                                    <div className="col d-flex justify-content-start">
                                        <button
                                            type="submit"
                                            id="register"
                                            className="btn btn-primary btn-block"
                                        >
                                            register
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}