import clsx from 'clsx';
import cx from './header.module.scss';

function Header() {
   const header = clsx(cx.header);
   return <h2 className={header}>header</h2>;
}

export default Header;
