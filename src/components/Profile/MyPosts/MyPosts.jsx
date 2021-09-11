import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	
	let postData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 10 },
    { id: 2, message: 'It\'s my first post', likesCount: 15 }
  ]

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add</button>
				</div>
			</div>
			<div className={s.posts}>
				<Post massage={postData[0].message} like={postData[0].likesCount} />
				<Post massage={postData[1].message} like={postData[1].likesCount} />
			</div>
		</div>
	)
}

export default MyPosts