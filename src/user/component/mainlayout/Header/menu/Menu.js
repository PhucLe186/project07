import styles from './menulist.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Menu({ children }) {
    return <nav className={cx('menu')}>{children}</nav>;
}

export default Menu;
