
import s from './Friends.module.css';
import { NavLink } from 'react-router-dom'
import Friend from './Friend/Friend';

const Friends = (props) => {
    let friendsElements = props.friends.map(friend => <Friend name={friend.name} key = {friend.id} ava={friend.img} id={friend.id} />)
    return (
            <div className={s.friends}>
                <p className={s.title}>Friends</p>

                <div className={s.items}>
                    <NavLink to="/friends" activeClassName={s.active}>{friendsElements}</NavLink>
                </div>

            </div>
    );
}
export default Friends