import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import NavArt from './components/NavArt';
import ArticleCall from './components/ArticleCall';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TheArticle from './components/TheArticle';

function App() {
	return (
		<BrowserRouter>
			<Container fluid>
				<NavArt />
				<Routes>
					<Route element={<ArticleCall />} path='/' />
					<Route element={<TheArticle />} path='/:articleId' />
				</Routes>
			</Container>{' '}
		</BrowserRouter>
	);
}

export default App;
