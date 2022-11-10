import {AiFillStar} from 'react-icons/ai'


const CommentItem = () => (
  <div className="comment-review">
    <div className="Dp-container">
      <img
        src="https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663577538/au6CrySufWyuM9AurXh84e_hqzmtq.jpg"
        alt="img1"
        className="review-image"
      />

      
    </div>
    <div className="comment-container">
      <p className="comment">
        The Quality of there work is impeccable and amazing i love there work
      </p>
      <div>
        <AiFillStar className="star-by-customer" />
        <AiFillStar className="star-by-customer" />
        <AiFillStar className="star-by-customer" />
        <AiFillStar className="star-by-customer" />
      </div>
    </div>
  </div>
)

export default CommentItem