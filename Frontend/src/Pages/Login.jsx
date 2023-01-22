import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styles from "../CSS/Login.module.css";
function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:8080/user/login', {...user})
            console.log(user)
            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className={styles.login_page}>
            <Link to="/">
            <img className={styles.img} src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg" alt="" />
            </Link>
            <form onSubmit={loginSubmit}>
                <h1>Login</h1>
                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className={styles.row}>
                    <button type="submit">Login</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
            <div>

            </div>
        </div>
    )
}

export default Login