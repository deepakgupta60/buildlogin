import React, { useState } from 'react'

const Login = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [checkUser, setCheckUser] = useState(true)
    const [checkError, setCheckError] = useState(false)

    const handleChange=(e)=>{
        const {name, value}=e.target
        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }
    const handleSubmit = () => {
        console.log(formData)
        if (formData.username === "user" && formData.password === "password") {
            setCheckUser(false)
        }
        else
        {
            setCheckError(true)
        }

    }
    return (
        <>


            {checkUser ? (
                <>
                    <h1>Login Page</h1>
                    {checkError && "Invalid username and password"}
                    <p>Username:</p>  <input type='text' name='username' onChange={handleChange} placeholder='username' required /><br />
                    <p>Password:</p> <input type='password' name='password' onChange={handleChange}  placeholder='password' required /> <br />
                    <button onClick={handleSubmit}>Submit</button>
                </>

            ) : <p>Welcome, User!</p>}

        </>
    )
}

export default Login