import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-lbzGOveOpKArJD2vcdQuAUjSFq5LkH5iO2P3kzrRR8HlKuJ--rbzypmvTZlyleP4j0&usqp=CAU' />
			{ props.massage }
			<div>
				<span>like</span>
			</div>
		</div>
	)
}

export default Post