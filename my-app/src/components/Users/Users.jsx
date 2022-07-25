import React from 'react'
import s from './Users.module.css';
import { NavLink } from 'react-router-dom'
import User from './User/User';
import UserProfileContainer from './UserProfile/UserProfileContainer'


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let   usersElements = props.users.map(
        user => <User name={user.name}
            key={user.id}
            ava={user.photos.small}
            id={user.id}
            followed={user.followed}
            follow={props.follow}
            unFollow={props.unFollow} />)

    return (
        <div className={s.usersPage}>
            <div className={s.users}>
                <p className={s.title}>Users</p>
                <div className={s.items}>
                    <NavLink to="/users" activeClassName={s.active}>{usersElements}</NavLink>
                </div>
                <div className={s.pages}>
                    {pages.map(p => {
                        return <span className={props.currentPage === p && s.selectedPage} 
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                    })}
                </div>
            </div>
            <div className={s.userInfo}>
                <UserProfileContainer /> 
            </div>
        </div>
    );
}


export default Users