import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'

export default function Carousels() {
return (
	<div >
	<Carousel interval={null}>
		<Carousel.Item >
    <iframe title="Youtube" className="vi" src="https://www.youtube.com/embed/zpOULjy-n8?rel="></iframe>
		<Carousel.Caption>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item >
    <iframe title="Youtube" className="vi" src="https://www.youtube.com/embed/zpOULjy-n8?rel="></iframe>

		<Carousel.Caption>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}
