import s from './MessageItem.module.css'

export const MessageItem = (props) => {

    if (props.user) {
        return (
            <div className={s.userItem}>
                <div className={s.userMessage}>{props.message}</div>
                <div className={s.userAva}><img src={props.img} alt="" /></div>
            </div>
        )
    } else {
        return (
            <div className={s.item}>
                <div className={s.message}>{props.message}</div>
                <div className={s.ava}><img src={props.img} alt="" /></div>
            </div>
        )       
    }

}