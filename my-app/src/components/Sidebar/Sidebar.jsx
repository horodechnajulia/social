
import s from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/friends" activeClassName = {s.active}>Friends</NavLink>
            </div>
            
            <div className={s.item}>
                <NavLink to="/users" activeClassName = {s.active}>Users</NavLink>
            </div>
        </nav>
    );
}
export default Sidebar