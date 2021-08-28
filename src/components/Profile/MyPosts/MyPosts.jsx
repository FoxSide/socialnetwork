import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Add</button>
			</div>
			<div className={s.posts}>
				<Post massage='Hi, how are you?' like='10' />
				<Post massage="It's my first post" like='20' />
			</div>
		</div>
	)
}

export default MyPosts