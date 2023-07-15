

import { Link } from 'react-router-dom'
import { Card } from '../../components/index'
import imgReset from '../../assets/img/reset.png'
import classNames from "classnames/bind";
import styles from './Auth.module.scss';
const cx = classNames.bind(styles)
function Reset() {
    return ( 
        
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

                    <form>
                        <input type="text" placeholder='Email' required/>
                        <button className="--btn --btn-primary --btn-block" type="submit">Reset password</button>
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
    );
}

export default Reset;