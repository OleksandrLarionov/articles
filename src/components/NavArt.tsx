import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img from '../assets/pngwing.com.png'
const NavArt = () => {
	return (
		<>
			<Navbar className='bg-body-tertiary'>
				<Container>
					<Navbar.Brand href='#home'>
						<img
							alt='img'
							src={img}
							width='40'
							height='40'
							className='d-inline-block align-top'
						/>{' '}
						SpaceArt
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
};
export default NavArt;
