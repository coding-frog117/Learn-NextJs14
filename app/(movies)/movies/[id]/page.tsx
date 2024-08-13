import { Suspense } from 'react';
import MovieInfos from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';
import { getMovie } from '../../../../components/movie-info';

interface IParams {
	params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
	const movie = await getMovie(id);
	return {
		title: movie.title,
	};
}

export default async function MovieDetail({ params: { id } }: IParams) {
	return (
		<div>
			<Suspense fallback={<h1>Loading movie infos</h1>}>
				<MovieInfos id={id} />
			</Suspense>
			<Suspense fallback={<h1>Loading movie videos</h1>}>
				<MovieVideos id={id} />
			</Suspense>
		</div>
	);
}
