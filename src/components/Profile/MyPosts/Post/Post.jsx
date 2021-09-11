import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<div>
				<img className={s.img1} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-lbzGOveOpKArJD2vcdQuAUjSFq5LkH5iO2P3kzrRR8HlKuJ--rbzypmvTZlyleP4j0&usqp=CAU' />
				{props.massage}
			</div>
			<div>
				<img className={s.img2} src='https://i.pinimg.com/736x/b3/68/f2/b368f294f7c537be5cb5fb7651107001--ems.jpg' />
				{props.likesCount}
			</div>
		</div>
	)
}

export default Post