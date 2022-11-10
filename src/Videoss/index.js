import VideoCarousels from '../VideoCarousel'

import './index.css'


const Portfolio = () => {
    return (
        
<div className="videos-container-1" id="videos">
       

            <div class="videos-main-container">
                <div className="video-para-container">
                    <div className="videos">
                    <h1 className="video-heading">Videos</h1>
                        <p className="video-para">
                        Lorem ipsum dolor sit amet. Qui ducimus autem ut provident fugasit provident cum magni delectus! Est dicta doloresEa aliquam eos omnis quis et sunt ratione et perferendis necessitatibus non delectus voluptates ad cupiditate vero. Aut repellendus maioresSit libero sit galisum officia rem perspiciatis repellendus non officiis perferendis. Quo commodi consectetur aut ipsa rerumSit omnis non magni dignissimos.
                        </p>
                    </div>
                    
                </div>    
                <div className='caro-css'>
                <VideoCarousels/>
               </div>
                <div className="video-s">
                   
                    <div className="f-2-videos">
                    <iframe title="Youtube" className="vido" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
                    <iframe title="Youtube" className="vido" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
                    </div>
                    <div className="s-2-videos">
                    <iframe title="Youtube" className="vido" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
                    <iframe title="Youtube" className="vido" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
                    </div>
                </div>
               </div>  
    </div>

      
    )
}

export default Portfolio;