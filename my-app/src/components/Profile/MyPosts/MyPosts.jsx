
import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} key = {post.id} likesCount={post.likesCount} />)

    let onAddPost = () => {
        props.addPost();

    };
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);

    }

    return (
        <div className={s.allPosts}>
            My Posts
            <div>
                <textarea onChange={onPostChange} name="" value={props.newPostText} cols="30" rows="10" />
                <button onClick={onAddPost} >add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts