import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../assets/aalogo.png';

const Links = [
	{
		id: 1,
		name: 'Amplified Aggression',
		path: '/',
	},
	{
		id: 2,
		name: 'Blogs',
		path: '/blogs',
	},
	{
		id: 3,
		name: 'Categories',
		path: '/categories',
	},
	{
		id: 4,
		name: 'News',
		path: '/news',
	},
];

function Nav() {
	return (
		<>
			<nav className={styles.nav}>
				<div className={styles.navContainer}>
					<div className={styles.navLogo}>
						{/* Link with logo not using Links array - manual */}
						<Link to="/">
							<img src={Logo} alt="Amplified Aggression" />
						</Link>
					</div>
					<div className={styles.navLinks}>
						{
							// from index 1 to the end
							Links.slice(1).map((link) => (
								<Link to={link.path} key={link.id}>
									{link.name}
								</Link>
							))
						}
					</div>
				</div>
			</nav>
		</>
	);
}

export default function Navbar() {
	return (
		<>
			<header>
				<Nav />
			</header>
		</>
	);
}
