

import { Link } from 'react-router-dom'
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify';
import { auth } from '../../firebase/config';
import { Card } from '../../components/index'
import imgReset from '../../assets/img/reset.png'
import classNames from "classnames/bind";
import styles from './Auth.module.scss';
import Loader from '../../components/loader/Loader';
const cx = classNames.bind(styles)
function Reset() {


    const [ email, setEmail] = useState('')
    const [ isLoadinng, setIsLoading] = useState(false)
    const resetPassword =(e)=>{
        e.preventDefault();
        setIsLoading(true)

        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success(' Check your email for a reset link')
            setIsLoading(false)
        })
        .catch((error) => {
            toast.error(error.message)
            setIsLoading(false)
        });

    }
    return ( 
        <>
            {
                isLoadinng && <Loader/>
            }
            <section className={cx('auth', 'container')}>
                <div className={cx('img')}>
                    <img 
                        width='500'
                        src={imgReset} 
                        alt="Reset password"
                    />
                </div>
                <Card>
                    <div className={cx('form')}>
                        <h2>Reset password</h2>
                        <form onSubmit={resetPassword}>
                            <input 
                                type="text" 
                                placeholder='Email' required
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                            <button 
                                className="--btn --btn-primary --btn-block" 
                                type="submit">Reset password
                            </button>
                            <div className={cx('links')}>
                                <p>
                                    <Link to='/login'>
                                        - Login -
                                    </Link>
                                </p>
                                <p>
                                    <Link to='/register'>
                                        - Register -
                                    </Link>
                                </p>

                            </div>
                            
                        </form>
                        

                    </div>
                </Card>
            </section>
        </>
    );
}

export default Reset;