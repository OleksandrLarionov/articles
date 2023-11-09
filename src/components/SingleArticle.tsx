import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Article from '../interfaces/article';
const SingleArticle = ({ artic }: { artic: Article }) => {
	return (
		<ListGroup.Item className='my-2'>
			<Row className='d-flex justify-content-between'>
				<Col md={9}>{artic.title}</Col>
				<Col md={3}>{artic.published_at}</Col>
			</Row>
		</ListGroup.Item>
	);
};
export default SingleArticle;
