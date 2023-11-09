import { useParams } from 'react-router-dom';
import Article from '../interfaces/article';
import { useEffect, useState } from 'react';
import MainArticle from './MainArticle';
const TheArticle = () => {
	const [theArticle, setTheArticle] = useState<Article[]>([]);
	const params = useParams();
	// const id = params.id;
	const id = '21429';
	useEffect(() => {
		myArticledata();
	}, []);
	const myArticledata = async () => {
		try {
			const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles' + id);
			if (response) {
				const data = await response.json();
				const results = data.results;
				setTheArticle(results);
				console.log(results);
			} else {
				throw new Error('Error download dati');
			}
		} catch (error) {}
	};

	return <MainArticle articleData={theArticle} />;
};

export default TheArticle;
