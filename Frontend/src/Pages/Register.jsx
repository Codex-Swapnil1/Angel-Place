import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styles from "../CSS/Login.module.css";
function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:8080/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className={styles.login_page}>
            <Link to="/">
            <img className={styles.img}  src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg" alt="" />
            </Link>
            <form onSubmit={registerSubmit}>
                <h1>Register</h1>
                <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className={styles.row}>
                    <button type="submit">Register</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
            
        </div>
    )
}

export default Register