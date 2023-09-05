import React from 'react'
import './Trending.css'

//importing icon of left and right arrow
import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'

//importing images of trending cars
import car1 from '../../assets/car1.jpg'
import car2 from '../../assets/car2.jpg'
import car3 from '../../assets/car3.jpg'

const Trending= () => {
  return (
    <div className='trending section'>
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
              Trending Near You
          </h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>


        <div className="carContainer grid">

          {/* single car div */}
          <div className="singleCar grid">
            <div className="imgDiv">
            <img src={car1} alt="car image" />
          </div>
          <h5 className="carTitle">
            Used 2019 GT Mustang
          </h5>
          <span className='miles'>
            11467 Miles
          </span>
          <span className="AWD">
            AWD 4-Cylinder Turbo
          </span>
          <div className="price_seller flex">
            <span className="price">
              $41,200
            </span>
            <span className="seller">
              Best Seller
            </span>
            </div>
          </div>

          {/* single car div */}
          <div className="singleCar grid">
            <div className="imgDiv">
            <img src={car2} alt="car image" />
          </div>
          <h5 className="carTitle">
            Used 2020 Lamborghini Sian
          </h5>
          <span className='miles'>
            98876 Miles
          </span>
          <span className="AWD">
            AWD 4-Cylinder Turbo
          </span>
          <div className="price_seller flex">
            <span className="price">
              $69,000
            </span>
            <span className="seller">
              Best Seller
            </span>
            </div>
          </div>

          {/* single car div */}
          <div className="singleCar grid">
            <div className="imgDiv">
            <img src={car3} alt="car image" />
          </div>
          <h5 className="carTitle">
            Used 2022 Rolls Royce Phantom
          </h5>
          <span className='miles'>
            15878 Miles
          </span>
          <span className="AWD">
            AWD 4-Cylinder Turbo
          </span>
          <div className="price_seller flex">
            <span className="price">
              $75,000
            </span>
            <span className="seller">
              Best Seller
            </span>
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default Trending
