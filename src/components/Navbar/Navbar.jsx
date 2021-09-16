import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Nav = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
			</div>
			<div className={`${s.item} ${s.active}`}>
				<NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/news' activeClassName={s.active}>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/music' activeClassName={s.active}>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='settings' activeClassName={s.active}>Settings</NavLink>
			</div>

			<div className={s.friendAdd}>
				<div className={s.fontFfriends}>
					Friends
				</div>
				<div className={s.avatar}/>
				<div className={s.avatar}/>
				<div className={s.avatar}/>
				<div className={s.fontName}>
					Valera
				</div>
				<div className={s.fontName}>
					Sveta
				</div>
				<div className={s.fontName}>
					Sasha
				</div>
			</div>
		</nav>
	)
}

export default Nav