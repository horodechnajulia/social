
import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className = {s.item}>
            <div>              
                <img className = {s.ava} src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" alt="" />
            {props.message}
            </div>          
            <span>like {props.likesCount}</span>
        </div>
    );
}
export default Post