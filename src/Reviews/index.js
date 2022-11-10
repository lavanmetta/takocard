import CommentItem from '../CommentItem'
import { FaHome } from 'react-icons/fa';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { AiFillProfile } from 'react-icons/ai';
import { MdVideoStable } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';
import './index.css'

const Reviews = () => { 
    return (
        <div>
        <div className="reviews-main-container" id="reviews">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="review-containers">
         <p className='review-heading-one'>How Was Your Experience :-</p>
         <textarea className="review-textarea" rows="4" cols="50"/>
         <button className="review-button">Submit</button>
        </div>
        <div className='review-card-1'>
        <CommentItem/>
        <CommentItem/>
        </div>
        <div className='review-card-2'>
        <CommentItem/>
        <CommentItem/>
        </div>
        </div>
         <div className='scroll-container'>
            <a href="#services">
             <div className='icon-background'>
              <MdOutlineMiscellaneousServices/>
             </div>
             </a>

             <a href="#portfolio">
             <div className='icon-background'>
             <AiFillProfile/>
            </div>
            </a>
            <a href="#about">
            <div className='icon-background'>
            <FaHome/>
           </div>
           </a>
           <a href="#videos">
           <div className='icon-background'>
           <MdVideoStable/>
          </div>
          </a>
          <a href="#reviews">
          <div className='icon-background'>
          <RiCustomerService2Fill/>
         </div>
         </a>
         </div>
        </div>
    )
}
export default Reviews