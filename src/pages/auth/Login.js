

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from '../../components/index'
import Loader from '../../components/loader/Loader';
import { auth } from '../../firebase/config'
import { AiOutlineGoogle } from 'react-icons/ai'
import imgLogin from '../../assets/img/login.png'
import classNames from "classnames/bind";
import styles from './Auth.module.scss';
const cx = classNames.bind(styles)

function Login() {

    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [ isLoadinng, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const loginUser =(e)=>{

        e.preventDefault()
        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setIsLoading(false)
            navigate('/')
        })
        .catch((error) => {
            toast.error(error.message)
            setIsLoading(false)
        });

    }

    //login with google
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            toast.success('LOgin successfully!')
            navigate('/')
        }).catch((error) => {
            toast.error(error.message)
        });
    }
    return ( 
        <>
            
            { isLoadinng && <Loader /> }
            <section className={cx('auth', 'container')}>
                <div className={cx('img')}>
                    <img 
                        width='500'
                        src={imgLogin} 
                        alt="Login"
                    />
                </div>
                <Card>
                    <div className={cx('form')}>
                        <h2>Login</h2>

                        <form onSubmit={loginUser}>
                            <input 
                                type="text" 
                                placeholder='Email' required
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                            <input 
                                type="password" 
                                placeholder='Password' required
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                            <button className="--btn --btn-primary --btn-block" type="submit">Login</button>
                            <div className={cx('links')}>
                                <Link to='/reset'>
                                    Reset Password
                                </Link>
                            </div>
                            <p>-- or --</p>
                        </form>
                        <button 
                            type="submit" 
                            className='--btn --btn-block --btn-danger'
                            onClick={signInWithGoogle}
                        >
                                < AiOutlineGoogle size={21}/>
                                Login With Google
                        </button>
                        <span className={cx('register')}>
                            Don't have an account?
                            <Link to='/register'> Register </Link>
                        </span>  
                    </div>
                </Card>
            </section>
        </>
    );
}

export default Login;