import React from 'react';
import { useState, useEffect } from 'react';
import { content } from '../data/content';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { PostProps } from '../types';
import LastPostCard from '../components/LastPostCard';
import CategoryButton from '../components/CategoryButton';

function Categories() {
	// refactor lastPosts to use useState
	// const [posts, setPosts] = useState(content);
	const [news, setNews] = useState(content);
	const [categories, setCategories] = useState(content);

	const filterPostsByCategory = (category: string) => {
		const filteredPosts = content.filter((post) => post.category === category);
		setCategories(filteredPosts);
	};

	const showAllPosts = () => {
		// setPosts(content.slice(0, -1).reverse());
		// sort ascending
		// setCategories(content.sort((a, b) => Number(a.id) - Number(b.id)));
		// sort descending
		// setCategories(content.sort((a, b) => Number(b.id) - Number(a.id)));
		// reverse array
		// Create a copy of the original array using the spread operator
		const reversedCategories = [...content];

		// Reverse the copied array
		reversedCategories.reverse();

		// Update the state with the reversed array
		setCategories(reversedCategories);
	};

	// by default, show all posts

	useEffect(() => {
		// setPosts(content.slice(0, -1).reverse());
		// setPosts(content.reverse());
		showAllPosts();
	}, []);
	return (
		<>
			<section className={styles.homeSectionOne}>
				<div className={styles.sectionContainer}>
					<div className={styles.lastBlogs}>
						<div className={styles.lastPost}>
							{/* {lastPosts.map((post: PostProps) => (
                            <Link to={`/post/${post.id}`} key={post.id}>
                                <LastPostCard post={post} />
                            </Link>
                        ))} */}
							{categories.map((post: PostProps) => (
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

export default Categories;
