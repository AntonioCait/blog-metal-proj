import React from 'react';
// react icons youtube, facebook, instagram
import { BsYoutube, BsFacebook, BsInstagram } from 'react-icons/bs';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.footerContainer}>
					<div className={styles.footerLogo}>
						<p>
							{
								// get year
								// small c icon
								'© ' + new Date().getFullYear() + ' Amplified Aggression'
							}
						</p>
					</div>
					<div className={styles.footerLinks}>
						<div className={styles.footerLinksTitle}>
							<p>Follow Us</p>
						</div>
						<BsYoutube
							style={{
								fontSize: '1.3rem',
							}}
						/>
						<BsFacebook
							style={{
								fontSize: '1.3rem',
							}}
						/>
						<BsInstagram
							style={{
								fontSize: '1.3rem',
							}}
						/>
					</div>
				</div>
			</footer>
		</>
	);
}
