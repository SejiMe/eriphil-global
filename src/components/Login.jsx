import React from 'react'

const Login = () => {
    return (
        <div>
            <form action="POST">
                <label htmlFor="user">Email Address</label>
                <input type="email" name="user" id="" placeholder=''/>
                <label htmlFor="">Password</label>
                <input type="password" name="password" id="" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default Login