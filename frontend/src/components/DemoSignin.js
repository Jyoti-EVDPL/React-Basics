import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


const DemoSignin = () => {
    //react hook form 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState("");
    const onSubmit = data => console.log(data);
    // console.log(errors);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log(message)
    // }, [message]);
    const handleSignin = async (e) => {
        e.preventDefault();
        console.warn("username,password", username, password)
        let result = await fetch('http://localhost:4000/auth/login', {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: {
                'content-type': 'application/json'
            }
        })
        // .then((res) => res.text())
        // .then((data) => setMessage(data)).catch(e => console.log(e))
        // .catch(error => console.log('error', error));
        result = await result.json();// as it return promise to we use await
        // console.warn(result)
        // console.log(data)
        // console.log(message)
        if (result) {
            localStorage.setItem('token', JSON.stringify(result))
            navigate('/')
        }
    }
    return (
        <>
            {/* <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <input {...register("firstName")} placeholder="First name" />
                <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, message: 'Type Mobile Number', maxLength: 10 })} />
                <input type="password" placeholder="Password" {...register("Password", { required: true, maxLength: 30 })} />
                <select {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Yes</option>
                    <option value="B">No</option>
                </select>
                <textarea {...register("aboutYou")} placeholder="About you" />
                <p>{data}</p>
                <input type="submit" />
            </form>
            <br></br>
            <br></br>
            <br></br>

            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("Title", { required: true })}>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>
                <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, maxLength: 10 })} />
                <input type="password" placeholder="Password" {...register("Password", { required: true, maxLength: 30 })} />

                <input {...register("Developer", { required: true })} type="radio" value="Yes" />
                <input {...register("Developer", { required: true })} type="radio" value="No" />

                <input type="submit" />
            </form>

            <br></br>
            <br></br>
            <br></br> */}

            <div className='login'>
                <h1>Login</h1>
                <input type="text" className="input Box " placeholder=' Enter Username'
                    onChange={(e) => setUsername(e.target.value)} value={username} /><br />
                <input type="text" className="input Box " placeholder=' Enter Password'
                    onChange={(e) => setPassword(e.target.value)} value={password} /><br />
                <button onClick={handleSignin} className="appButton" type="button">Login</button>
            </div>
        </>
    )
}
export default DemoSignin;