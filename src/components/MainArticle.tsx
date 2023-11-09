import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import Article from '../interfaces/article';
const MainArticle = ({ articleData }: { articleData: Article }) => {
	return (
		<Container>
			<Row>
				<Col md={5}>
					<Card>
						<Card.Img variant='top' src={articleData.image_url} />
						<Card.Body>
							<Card.Title>{articleData.title}</Card.Title>
							<Card.Text>{articleData.summary}</Card.Text>
						</Card.Body>
						<ListGroup className='list-group-flush'>
							<ListGroup.Item>{articleData.published_at}</ListGroup.Item>
						</ListGroup>
						<Card.Body>
							<Card.Link href='#'>{articleData.newsSite}</Card.Link>
						</Card.Body>
					</Card>
				</Col>
				<Col md={7}></Col>
			</Row>
		</Container>
	);
};

export default MainArticle;
