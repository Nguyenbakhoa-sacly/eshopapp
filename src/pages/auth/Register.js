

import { useState } from 'react';
import { createUserWithEmailAndPassword }from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebase/config'
import { Card } from '../../components/index'
import Loader from '../../components/loader/Loader';
import imgRegister from '../../assets/img/register.png'
import classNames from "classnames/bind";
import styles from './Auth.module.scss';
const cx = classNames.bind(styles)

function Register() {

    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [ confirpassword, setConfirpassword] = useState('')
    const [ isLoadinng, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const registerUser =(e)=>{
        e.preventDefault()
        console.log('>>>> check: ', email, password, confirpassword);

        if(password !== confirpassword) {
            toast.error(' Passwords do not match!')
        }
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                const user = userCredential.user;
                console.log(user);
                setIsLoading(false);
                // toast.success(' Registration SuccessFull!')
                navigate('/login');
            })
            .catch((error) => {
                toast.error(error.message)
                setIsLoading(false);
            });

    }

    return (  
        <>
            { isLoadinng && <Loader />}
            <section className={cx('auth', 'container')}>
                <Card>
                    <div className={cx('form')}>
                        <h2>Register</h2>
                        <form onSubmit={registerUser}>
                            <input 
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                                type="text" 
                                placeholder='Email' required/>
                            <input 
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                                type="password" 
                                placeholder='Password' required/>
                            <input 
                                value={confirpassword}
                                onChange={(e)=> setConfirpassword(e.target.value)}
                                type="Password" 
                                placeholder='ConfirPassword' required/>
                            <button 
                                className="--btn --btn-primary --btn-block" 
                                type="submit">Register
                            </button>
                        
                        </form>
                        <span className={cx('register')}>
                            Already an account?
                            <Link to='/login'> Login </Link>
                        </span>  
                    </div>
                </Card>
                <div className={cx('img')}>
                    <img 
                        width='500'
                        src={imgRegister} 
                        alt="Register"
                    />
                </div>
            </section>
        </>
    );
}

export default Register;