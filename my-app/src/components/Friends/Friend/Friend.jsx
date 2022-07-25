
import s from './Friend.module.css'
import { NavLink } from 'react-router-dom'

const Friend = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={'/friends/' + props.id} className={s.friend} activeClassName={s.active}> <div className={s.ava}> <img src={props.ava} alt="" /> </div><p className={s.name}>{props.name}</p></NavLink>
        </div>
    );
}
export default Friend