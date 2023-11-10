import { useParams } from 'react-router-dom';
import Article from '../interfaces/article';
import { useEffect, useState } from 'react';
import MainArticle from './MainArticle';
type ArticleDetailParams = {
	articleId: string;
};

const TheArticle = () => {
	const [theArticle, setTheArticle] = useState<Article | null>(null);
	const params = useParams<ArticleDetailParams>();
	// const id = params.id;
	// const id = '21429';
	useEffect(() => {
		myArticledata();
	}, []);
	const myArticledata = async () => {
		try {
			const response = await fetch(
				'https://api.spaceflightnewsapi.net/v4/articles/' + params.articleId
			);
			if (response.ok) {
				const data: Article = await response.json();
				const results = data;
				setTheArticle(results);
				console.log(results);
			} else {
				throw new Error('Error download dati');
			}
		} catch (error) {}
	};

	return theArticle && <MainArticle articleData={theArticle} />;
};

export default TheArticle;
