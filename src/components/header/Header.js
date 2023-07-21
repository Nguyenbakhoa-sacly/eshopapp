

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'
import { BiUserCircle } from 'react-icons/bi'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../../redux/slice/AuthSlice';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShowOnLogin, { ShowOnLogOut } from '../hiddenLink/hiddenLink';
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
    
    //Dùng để lấy tên người dùng
    const dispatch = useDispatch()
    const [ displayName, setDisplayName ] = useState('')
    useEffect (()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                
                // const uid = user.uid;
                console.log(user)
                if(user.displayName == null) {
                    const u1 = user.email.substring(0, user.email.indexOf('@'));
                    const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
                    
                    setDisplayName(uName);
                }else {
                    setDisplayName(user.displayName)
                }
                setDisplayName(user.displayName)

                dispatch(
                    SET_ACTIVE_USER({
                        email: user.email,
                        username: user.displayName ? user.displayName : displayName,
                        userID:user.uid,
                }));
            } else {
                setDisplayName('')
                dispatch( 
                    REMOVE_ACTIVE_USER()
                )
            }
            });

    }, [dispatch, displayName]);
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
                                <ShowOnLogOut>
                                    <NavLink 
                                        className={activeLInk}
                                        to='/login'
                                    > 
                                        Login 
                                    </NavLink>
                                </ShowOnLogOut>
                                <ShowOnLogin>
                                    <a href='#home' style={{color:'#ff7722'}}>
                                        <BiUserCircle size={16}/>
                                        Hi, { displayName }
                                    </a>
                                </ShowOnLogin>
                                <ShowOnLogOut>
                                    <NavLink 
                                        className={activeLInk}
                                        to='/register'
                                    > Register 
                                    </NavLink>
                                </ShowOnLogOut>
                                <ShowOnLogin>
                                    <NavLink 
                                        className={activeLInk}
                                        to='/order-history'
                                    > My orders 
                                    </NavLink>
                                </ShowOnLogin>
                                <ShowOnLogin>
                                    <NavLink 
                                        to='/'
                                        onClick={logoutUser}
                                        
                                    > 
                                        Logout
                                    </NavLink>
                                </ShowOnLogin>
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