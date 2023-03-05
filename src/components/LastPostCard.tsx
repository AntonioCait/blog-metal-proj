import React from 'react';
import { PostProps } from '../types';
import styles from './LastPostCard.module.css';

export default function LastPostCard({ post }: { post: PostProps }) {
	return (
		<article className={styles.card}>
			<div className={styles.cardImage}>
				<picture>
					<img src={post.image} alt={post.title} />
				</picture>
			</div>
			<div className={styles.cardContent}>
				<h3>{post.title}</h3>
				<p>{post.description}</p>
				<div className={styles.cardInfo}>
					<p>
						{post.category} - {post.date}
					</p>
				</div>
			</div>
		</article>
	);
}
