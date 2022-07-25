
import s from './UserProfile.module.css';
import { UndefinedUserProfile } from './UndefinedUserProfile/UndefinedUserProfile';


let UserProfile = (props) => {
    if (!props.profile) {
        return <UndefinedUserProfile />
    }
    return (
        <div className={s.userProfile}>
            <div className={s.userPhoto}>
                <img src={props.profile.photos.large} alt='' />
            </div>
            <p className={s.userFullName}>{props.profile.fullName}</p>
            <p className={s.userInfo}> About me: {props.profile.aboutMe}</p>
            <div className={s.contacts}>
                <p>Contacts:</p>
                <a href={props.profile.contacts.facebook}>facebook</a><br />
                <a href={props.profile.contacts.website}>website</a><br />
                <a href={props.profile.contacts.vk}>vk</a><br />
                <a href={props.profile.contacts.twitter}>twitter</a><br />
                <a href={props.profile.contacts.instagram}>instagram</a><br />
                <a href={props.profile.contacts.youtube}>youtube</a><br />
                <a href={props.profile.contacts.github}>github</a><br />
                <a href={props.profile.contacts.mainLink}>mainLink</a>
            </div>
        </div>
    );
}


export default UserProfile