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
  <h1>Login Page</h1>

            {checkUser ? (
                <>
                  
                  <form onSubmit={handleSubmit}>

                    {checkError && "Invalid username or password"}
                    <label>Username</label>  <input type='text' name='username' onChange={handleChange} placeholder='username' required /><br />
                    <label>Password</label> <input type='password' name='password' onChange={handleChange}  placeholder='password' required /> <br />
                    <button>Submit</button>
                  </form>
                </>

            ) : <p>Welcome, user</p>}

        </>
    )
}

export default Login