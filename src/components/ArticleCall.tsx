import { useEffect, useState } from 'react';
import Article from '../interfaces/article';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import SingleArticle from './SingleArticle';
const ArticleCall = () => {
	const [article, setArticle] = useState<Article[]>([]);
	useEffect(() => {
		myArticledata();
	}, []);
	const myArticledata = async () => {
		try {
			const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles');
			if (response) {
				const data = await response.json();
				const results = data.results;
				setArticle(results);
				console.log(results);
			} else {
				throw new Error('Error download dati');
			}
		} catch (error) {}
	};

	return (
		<Container>
			<Row>
				<Col className='mt-3'>
					{' '}
					<h2>News</h2>
					<ListGroup>
						{article.map((article, i) => {
							return <SingleArticle key={article.id} articleDetails={article} />;
						})}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

export default ArticleCall;
