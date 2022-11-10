import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BsArrowLeftShort } from 'react-icons/bs';
  
import { BsArrowRightShort } from 'react-icons/bs';
import './index.css'
const ClientCarousel = () => {
  
    return (
        <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={48}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
          <figure className="snip15333">
          <figcaption>
            <blockquote>
              <p >If you do the job badly enough, you don't get asked to do it again.</p>
            </blockquote>
            <h3>Wisteria Ravenclaw</h3>
            <h4 className="client">Google Inc.</h4>
          </figcaption>
        </figure>
          </Slide>
          <Slide index={1}>
          <figure className="snip15333">
          <figcaption>
            <blockquote>
              <p>I'm killing time while I wait for life to shower and happiness.</p>
            </blockquote>
            <h3>Ursula Gurnmeister</h3>
            <h4 className="client">Facebook</h4>
          </figcaption>
        </figure>
          </Slide>
          <Slide index={2}>
          <figure className="snip15333">
        <figcaption>
          <blockquote>
            <p>The only skills I have the patience to learn are those that have no real application in life. </p>
          </blockquote>
          <h3>Ingredia Nutrisha</h3>
          <h4 className="client" >Twitter</h4>
        </figcaption>
      </figure>
          
        </Slide>
        </Slider>
        <div className='carousel-buttons'>
        <ButtonBack className='c-button-b'>
        <BsArrowLeftShort  />
        </ButtonBack>
        <ButtonNext className='c-button-n'>
        <BsArrowRightShort/>
        </ButtonNext>
        </div>
      </CarouselProvider>
    );
  
}

export default ClientCarousel;