import s from './ProfileInfo.module.css'
export const ProfileInfo = (props) => {
    return (
        <div>
            <div >
                <img className={s.bigImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NyWSiUEygDLar0NiZZhZsQs84UtqckPBLQ&usqp=CAU" alt="" />
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}
