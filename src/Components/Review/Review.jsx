import React from "react";
import "./Review.css";

//imported icons
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import {AiFillStar} from "react-icons/ai"

//importing images
import car1 from '../../assets/image1.jpg'
import car2 from '../../assets/image2.jpg'
import car3 from '../../assets/image3.jpg'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'


const Review = () => {
  return (
    <div className="review section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Recent Reviews</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        {/* review container */}
        <div className="reviewContainer grid">
          {/* signle review */}
          <div className="singleReview grid">
            <div className="imgDiv">
            <img src={car1} alt="car image" />
            </div>
          <h5 className="reviewTitle">2023 Caditalic</h5>
          <span className="desc">
            Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
            </span>

            <div className="reviewDiv flex">
              <div className="leftDiv flex">
                <div className="reviewImage">
                  <img src={user1} alt="Reviewr Image"/>
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Kathrine Langford
                  </span>
                  <p>Chief Executive</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon"/>
                <blockquote>4.8</blockquote>
              </div>
            </div>
        </div>
          {/* signle review */}
          <div className="singleReview grid">
            <div className="imgDiv">
            <img src={car2} alt="car image" />
            </div>
          <h5 className="reviewTitle">2023 Caditalic</h5>
          <span className="desc">
            Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
            </span>

            <div className="reviewDiv flex">
              <div className="leftDiv flex">
                <div className="reviewImage">
                  <img src={user2} alt="Reviewr Image"/>
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                  Elizabeth Olsen
                  </span>
                  <p>Co-Actress</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon"/>
                <blockquote>5.0</blockquote>
              </div>
            </div>
        </div>
          {/* signle review */}
          <div className="singleReview grid">
            <div className="imgDiv">
            <img src={car3} alt="car image" />
            </div>
          <h5 className="reviewTitle">2023 Caditalic</h5>
          <span className="desc">
            Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
            </span>

            <div className="reviewDiv flex">
              <div className="leftDiv flex">
                <div className="reviewImage">
                  <img src={user3} alt="Reviewr Image"/>
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                  Brie Larson
                  </span>
                  <p>Actress</p>
                </div>
              </div>
              <div className="rightDiv flex">
                <AiFillStar className="icon"/>
                <blockquote>4.9</blockquote>
              </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Review;
