

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cx = classNames.bind(styles)

const logo = (
    <div className={cx('logo')}>
        <Link to='/'> 
            <h2>
                e<span>Shop</span>.
            </h2>
        </Link>
    </div>
)

const cart = (
    <span className={cx('cart')}>
        <Link to='/cart'>
            Cart
            <AiOutlineShoppingCart  size={20}/>
            <p>0</p>
        </Link>
    </span>
)

const activeLInk = ({isActive})=>(
    isActive ? `${cx('active')}` :''
)

function Header() {

    const [ showMenu, setShowMenu ] = useState(false)
    const navigate = useNavigate()
    const taggleMenu = ()=>{
        setShowMenu( !showMenu );
    }
    const  hideMenu = ()=>{
        setShowMenu( false );
    }

    const logoutUser =()=>{
        signOut(auth).then(() => {
            toast.success( 'Logout successfully')
            navigate('/login')
        }).catch((e) => {
            toast.error(e.message)
        });

    }
    return ( 
        <>
            <ToastContainer/>
            <header>
                <div className={cx('header')}>
                    {logo}
                    <nav className={ showMenu ? `${ cx('show-nav')}`: `${ cx('hide-menu')}` }>

                        <div 
                            onClick={hideMenu} 
                            className={ 
                                showMenu ? `${cx('nav-wrapper')} ${cx('show-nav-wrapper')}` : 
                                `${cx('nav-wrapper')}` 
                            }>
                        </div>

                        <ul onClick={ hideMenu }>
                            <li className={cx('logo-mobile')}>
                                {logo}
                                <FaTimes 
                                    size={22} 
                                    color='#fff'
                                    onClick={ hideMenu }
                                />
                            </li>
                            <li>
                                <NavLink 
                                    to='/' 
                                    className={ activeLInk }> 
                                    Home 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to='/Contact'   
                                    className={ activeLInk }
                                > Contact Us 
                                </NavLink>
                            </li>
                        </ul>
                        <div 
                            className={cx('header-right')}
                            onClick={ hideMenu }
                        >
                            <span className={cx('links')}>
                                <NavLink 
                                    className={activeLInk}
                                    to='/login'
                                > 
                                    Login 
                                </NavLink>
                                <NavLink 
                                    className={activeLInk}
                                    to='/register'
                                > Register 
                                </NavLink>
                                <NavLink 
                                    className={activeLInk}
                                    to='/order-history'
                                > My orders 
                                </NavLink>
                                <NavLink 
                                    to='/'
                                    onClick={logoutUser}
                                    
                                > 
                                    Logout
                                </NavLink>
                            </span>
                            {cart}
                        </div>
                        
                    </nav>

                    <div className={cx('menu-icon')}>
                        {cart}
                        < HiOutlineMenuAlt3  size={28}
                        onClick={ taggleMenu }
                        />
                    </div>
                </div>

            </header>
        </>
    );
}

export default Header;