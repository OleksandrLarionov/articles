import { Row, Col, ListGroup } from 'react-bootstrap';
import Article from '../interfaces/article';
import { Link } from 'react-router-dom';
const SingleArticle = ({ articleDetails }: { articleDetails: Article }) => {
	return (
		<ListGroup.Item className='my-2'>
			<Row className='d-flex justify-content-between'>
				<Link to={'/' + articleDetails.id}>
					<Col md={9}>{articleDetails.title}</Col>
				</Link>
				<Col md={3}>{articleDetails.published_at}</Col>
			</Row>
		</ListGroup.Item>
	);
};
export default SingleArticle;
