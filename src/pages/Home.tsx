import React from 'react';
import { useState, useEffect } from 'react';
import { content } from '../data/content';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { PostProps } from '../types';
import LastPostCard from '../components/LastPostCard';
import CategoryButton from '../components/CategoryButton';
import Categories from './Categories';

function HeroBanner() {
	// get last post added to the array
	const firstPost = content.slice(-1);

	return (
		<main className={styles.hero}>
			{firstPost.map((post: PostProps) => (
				<Link to={`/post/${post.id}`} key={post.id}>
					<article className={styles.post} key={post.id}>
						<div className={styles.imagePost}>
							<picture>
								<img src={post.image} alt={post.title} />
							</picture>
						</div>
						<div className={styles.contentPost}>
							<h2 className={styles.titlePost}>{post.title}</h2>
							<p className={styles.descriptionPost}>{post.description}</p>
							<div className={styles.infoPost}>
								<span className={styles.categoryPost}>{post.category}</span>
								<span> - </span>
								<span className={styles.datePost}>
									{new Date(post.date).toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</span>
							</div>
						</div>
					</article>
				</Link>
			))}
		</main>
	);
}

export default function Home() {
	// const lastPosts = content.slice(0, -1).reverse();
	// refactor lastPosts to use useState
	const [posts, setPosts] = useState(content);
	const [news, setNews] = useState(content);

	const filterPostsByCategory = (category: string) => {
		const filteredPosts = content.filter((post) => post.category === category);
		setPosts(filteredPosts);
	};

	const showAllPosts = () => {
		setPosts(content.slice(0, -1).reverse());
	};

	// by default, show all posts

	useEffect(() => {
		setPosts(content.slice(0, -1).reverse());
	}, []);

	return (
		<>
			<HeroBanner />

			<section className={styles.homeSectionOne}>
				<div className={styles.sectionContainer}>
					<div className={styles.lastBlogs}>
						<div className={styles.lastPost}>
							{/* {lastPosts.map((post: PostProps) => (
                            <Link to={`/post/${post.id}`} key={post.id}>
                                <LastPostCard post={post} />
                            </Link>
                        ))} */}
							{posts.map((post: PostProps) => (
								<Link to={'/post/' + post.id} key={post.id}>
									<LastPostCard post={post} />
								</Link>
							))}
						</div>
					</div>
					<div className={styles.categories}>
						<div className={styles.categoriesTitle}>
							<p>Categories</p>
						</div>
						<CategoryButton categoryName="All" filterPostsByCategory={showAllPosts} />
						<CategoryButton categoryName="Metal" filterPostsByCategory={filterPostsByCategory} />
						<CategoryButton categoryName="Metalcore" filterPostsByCategory={filterPostsByCategory} />
						<CategoryButton categoryName="Recording" filterPostsByCategory={filterPostsByCategory} />
						<CategoryButton categoryName="Djent" filterPostsByCategory={filterPostsByCategory} />
						<CategoryButton categoryName="Concerts" filterPostsByCategory={filterPostsByCategory} />
						<div className={styles.categories}>
							<div className={styles.categoriesTitle}>
								<p>News</p>
							</div>
							{
								// fetch news that contain type: news
								news
									.filter((post) => post.type === 'News')
									.map((post: PostProps) => (
										<>
											<Link className={styles.newsLink} to={`/post/${post.id}`} key={post.id}>
												<p>{post.title}</p>
											</Link>
										</>
									))
							}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
