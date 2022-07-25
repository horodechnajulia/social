
import s from './User.module.css'
import { NavLink } from 'react-router-dom'
import userPhoto from "../../../assets/images/user_not_found.jpeg"
import * as axios from 'axios';



const User = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={'/users/' + props.id} className={s.user} activeClassName={s.active}>
                <div className={s.ava}>
                    <img src={props.ava != null ? props.ava : userPhoto} alt="" />
                </div>
                <p className={s.name}>{props.name}</p>
                <div>
                    {props.followed
                        ?
                        <button onClick={() => {

                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                                withCredentials: true,
                                headers: {
                                    "api-key": "c001c360-5658-4d75-8214-7221d0892c25"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unFollow(props.id);
                                    }
                                })


                        }} className={s.button}>Unfollow</button>
                        :
                        <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "api-key": "c001c360-5658-4d75-8214-7221d0892c25"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(props.id);
                                    }
                                })


                        }} className={s.button}>Follow</button>}
                </div>

            </NavLink>
        </div>
    );
}
export default User