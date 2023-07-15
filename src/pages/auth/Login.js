

import { Link } from 'react-router-dom'
import { Card } from '../../components/index'
import { AiOutlineGoogle } from 'react-icons/ai'
import imgLogin from '../../assets/img/login.png'
import classNames from "classnames/bind";
import styles from './Auth.module.scss';
const cx = classNames.bind(styles)
function Login() {
    return ( 
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

                    <form>
                        <input type="text" placeholder='Email' required/>
                        <input type="password" placeholder='Password' required/>
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
    );
}

export default Login;