

import styles from './Footer.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)


const date = new Date()
const year = date.getFullYear()
function Footer() {
    return ( 
        <div className={cx('footer')}>
            &copy; {year} All Rights Reserved
        </div>
    );
}

export default Footer;