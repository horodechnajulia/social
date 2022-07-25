import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

export const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}> <img src={props.img} alt=""/> {props.name}</NavLink>
        </div>
    )
}