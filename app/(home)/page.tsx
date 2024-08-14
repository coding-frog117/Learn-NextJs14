import Link from 'next/link';
import Movie from '../../components/movie';
import styles from '../../styles/home.module.css';

export const metadata = {
	title: 'Home',
};

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const response = await fetch(API_URL);
	const json = await response.json();
	return json;
}

export default async function HomePage() {
	const movies = await getMovies();
	return (
		<div className={styles.container}>
			{movies.map((movie: Movie) => (
				<Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
			))}
		</div>
	);
}
