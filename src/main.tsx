import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// pages
import Home from './pages/Home';
import Categories from './pages/Categories';
import News from './pages/News';
// dynamic pages
import Post from './dynamic-pages/Post';
// react-router-dom
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
// data
import { content } from './data/content';
// types
import { PostProps } from './types';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blogs" element={<Home />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="/news" element={<News />} />
				{/* post id */}
				<Route path="/post/:id" element={<Post />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
