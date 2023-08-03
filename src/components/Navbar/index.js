import clsx from 'clsx';
import style from './header.module.scss';

function Navbar() {
   const navbar = clsx(style.navbar);
   return <h2 className={navbar}>Navbar</h2>;
}

export default Navbar;
