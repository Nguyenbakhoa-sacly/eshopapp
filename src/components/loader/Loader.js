
import ReactDom from 'react-dom';
import classNames from "classnames/bind";
import styles from './Loader.module.scss'
const cx = classNames.bind(styles)

function Loader() {
    return ReactDom.createPortal (  
        // <div className={cx('wrapper')}>
        // </div>
        <div className={cx('wrapper')}>
            <div className={cx('spinner')}></div>
        </div>,
        document.getElementById('loader')

    );
}

export default Loader;
