import ClientCarousel from '../ClientCarousel';
import './index.css';

const Clients = () => {

    return (
    <div className="client-main-container" id="clients">
      
        <div className="client-content">
            <h1 className="client-heading">Clients</h1>
            <p className="client-para">Lorem Ut deleniti aliquam ea voluptatibus culpa quo Quis deleniti sit veniam consequatur est omnis aspernatur vel dolores tempore. Id quaerat provident est exercitationem consequuntur et expedita dolore ex voluptas galisum eum enim neque quo accusantium nesciunt qui numquam nemo!</p>
        </div>
        <div>
        <div className='Client-Carousel'>
        <ClientCarousel/>
        </div>
        <figure className="snip1533">
        <figcaption>
          <blockquote>
            <p >If you do the job badly enough, sometimes you don't get asked to do it again.</p>
          </blockquote>
          <h3>Wisteria Ravenclaw</h3>
          <h4 className="client">Google Inc.</h4>
        </figcaption>
      </figure>
      <figure className="snip1533">
        <figcaption>
          <blockquote>
            <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
          </blockquote>
          <h3>Ursula Gurnmeister</h3>
          <h4 className="client">Facebook</h4>
        </figcaption>
      </figure>
      <figure className="snip1533">
        <figcaption>
          <blockquote>
            <p>The only skills I have the patience to learn are those that have no real application in life. </p>
          </blockquote>
          <h3>Ingredia Nutrisha</h3>
          <h4 className="client" >Twitter</h4>
        </figcaption>
      </figure>
        </div>
    </div>
    )
}

export default Clients