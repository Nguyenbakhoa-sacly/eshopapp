

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

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


function Header() {
    return ( 
        <header>
            <div className={cx('header')}>
                {logo}
                <nav>
                    <ul>
                        <li><Link to='/'> Home </Link></li>
                        <li><Link to='/Contact'> Contact Us </Link></li>
                    </ul>
                    <div className={cx('header-right')}>
                        <span className={cx('links')}>
                            <Link to='/login'> Login </Link>
                            <Link to='/register'> Register </Link>
                            <Link to='/order-history'> My orders </Link>
                        </span>
                        {cart}
                    </div>
                </nav>

                <div className={cx('menu-icon')}>
                    {cart}
                    < HiOutlineMenuAlt3  size={28}/>
                </div>
            </div>

        </header>
    );
}

export default Header;