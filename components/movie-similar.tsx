import styles from '../styles/movie-similar.module.css';
import { API_URL } from '../app/constants';
import { Movie } from '../app/(home)/page';

async function getSimilarMovies(id: string) {
	const response = await fetch(`${API_URL}/${id}/similar`);
	return response.json();
}

export default async function MovieSimilar({ id }: { id: string }) {
	const similarMovies = await getSimilarMovies(id);
	return (
		<>
			<h2 className={styles.title}>Similar movies</h2>
			<div className={styles.container}>
				{similarMovies.slice(0, 5).map((similarMovie: Movie) => (
					<img className={styles.img} src={similarMovie.poster_path} alt={similarMovie.title} />
				))}
			</div>
		</>
	);
}
