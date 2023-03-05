import React from 'react';
import styles from './CategoryButton.module.css';

interface CategoryButtonProps {
	categoryName: string;
	filterPostsByCategory: (category: string) => void;
}

export default function CategoryButton({ categoryName, filterPostsByCategory }: CategoryButtonProps) {
	return (
		<>
			<button
				className={styles.categoryButton}
				onClick={() => {
					filterPostsByCategory(categoryName);
				}}
			>
				{categoryName}
			</button>
		</>
	);
}
