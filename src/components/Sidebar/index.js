import clsx from 'clsx';
import cx from './sidebar.module.scss';

function Sidebar() {
   return <h2 className={clsx(cx.sidebar)}>Sidebar</h2>;
}

export default Sidebar;
