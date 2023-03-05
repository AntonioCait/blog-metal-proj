import React from 'react';
import { useState, useEffect } from 'react';
import { content } from '../data/content';
import styles from './Home.module.css';
import stylesNews from './News.module.css';
import { Link } from 'react-router-dom';
import { PostProps } from '../types';
import LastPostCard from '../components/LastPostCard';
import CategoryButton from '../components/CategoryButton';
import Categories from './Categories';

function News() {
	const [news, setNews] = useState(content);

	useEffect(() => {
		setNews(content.slice(0, -1).reverse());
	}, []);

	return (
		<>
			<main className={stylesNews.newsContainer}>
				<div className={stylesNews.news}>
					{news
						.filter((post) => post.type === 'News')
						.map((post: PostProps) => (
							<Link to={'/post/' + post.id} key={post.id} className={stylesNews.newsLink}>
								<LastPostCard post={post} />
							</Link>
						))}
				</div>
			</main>
		</>
	);
}

export default News;
