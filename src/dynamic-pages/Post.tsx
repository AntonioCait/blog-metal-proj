import React from 'react';
import { useParams } from 'react-router-dom';
import { content } from '../data/content';
// types
import { PostProps } from '../types';
// styles
import styles from './Post.module.css';
function Post() {
	const { id } = useParams();
	const post = content.find((post: PostProps) => post.id === id);

	return (
		<>
			<main className={styles.mainContainer}>
				<article className={styles.postContainer}>
					<div className={styles.postImage}>
						<picture>
							<img src={post?.image} alt={post?.id} />
						</picture>
					</div>
					<div className={styles.body}>
						<h1>{post?.title}</h1>

						<div className={styles.postContent}>
							<p>{post?.content}</p>
						</div>
						<div className={styles.postInfo}>
							<p>
								{post?.category} - {post?.date}
							</p>
						</div>
					</div>
				</article>
			</main>
		</>
	);
}

export default Post;
