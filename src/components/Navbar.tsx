import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../assets/aalogo.png';
// useState
import { useState } from 'react';
// react icon
// AiOutlineAlignRight
import { AiOutlineAlignRight } from 'react-icons/ai';

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
	const [showLinks, setShowLinks] = useState<boolean>(false);

	const handleMobileMenu = () => {
		setShowLinks(!showLinks);
	};
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
					{/* hambuger menu */}
					<div className={styles.navHamburger}>
						<AiOutlineAlignRight onClick={handleMobileMenu} style={{ color: '#1e1e1e', fontSize: '2rem' }} />
					</div>
				</div>
			</nav>
			{/* nav menu on mobile */}
			{showLinks && (
				<div className={styles.navLinksMobile}>
					{
						// from index 1 to the end
						Links.slice(1).map((link) => (
							<div>
								<Link
									onClick={() => {
										setShowLinks(false);
									}}
									to={link.path}
									key={link.id}
								>
									{link.name}
								</Link>
							</div>
						))
					}
				</div>
			)}
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
