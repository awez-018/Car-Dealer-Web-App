import React from 'react'
import './Auction.css'

//importing icon of left and right arrow
import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'

//importng images
import car1 from '../../assets/pngcar1.jpg'
import car2 from '../../assets/pngcar2.jpg'
import car3 from '../../assets/pngcar3.jpg'
import car4 from '../../assets/pngcar4.jpg'
import car5 from '../../assets/pngcar5.jpg'
import car6 from '../../assets/pngcar6.jpg'


const Auction = () => {
  return (
    <div className='auction section'>
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">
              Active Auctions
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
            Used 2020 BMW X3
          </h5>
          <span className='miles'>
            11467 Miles
          </span>
          <span className="AWD">
            AWD 4-Cylinder Turbo
          </span>
          <div className="price_buyBtn flex">
            <span className="price">
              $55,000
            </span>
            <span className="buyBtn">
                Buy Now
            </span>
            </div>
          </div>

          {/* single car div */}
          <div className="singleCar grid singlecarActive">
            <div className="imgDiv">
            <img src={car2} alt="car image" />
          </div>
          <h5 className="carTitle">
            Used 2021 Audi Q8
          </h5>
          <span className='miles'>
            11467 Miles
          </span>
          <span className="AWD">
            AWD 4-Cylinder Turbo
          </span>
          <div className="price_buyBtn flex">
            <span className="price">
              $80,000
            </span>
            <span className="buyBtn">
                Buy Now
            </span>
            </div>
          </div>

          {/* single car div */}
          <div className="singleCar grid">
            <div className="imgDiv">
            <img src={car3} alt="car image" />
          </div>
          <h5 className="carTitle">
            Used 2019 Kia Carnival Limousine Plus 7 STR
          </h5>
          <span className='miles'>
            11467 Miles
          </span>
          <span className="AWD">
            AWD 4-Cylinder Turbo
          </span>
          <div className="price_buyBtn flex">
            <span className="price">
              $20,000
            </span>
            <span className="buyBtn">
                Buy Now
            </span>
            </div>
          </div>

          {/* single car div */}
          <div className="singleCar grid singlecarActive">
            <div className="imgDiv">
            <img src={car4} alt="car image" />
          </div>
          <h5 className="carTitle">
            Used 2019 Lamborghini Urus S
          </h5>
          <span className='miles'>
            11467 Miles
          </span>
          <span className="AWD">
            4.0-liter twin-turbo v8 engine
          </span>
          <div className="price_buyBtn flex">
            <span className="price">
              $95,000
            </span>
            <span className="buyBtn">
                Buy Now
            </span>
            </div>
          </div>
          {/* single car div */}
          <div className="singleCar grid">
            <div className="imgDiv">
            <img src={car5} alt="car image" />
          </div>
          <h5 className="carTitle">
            Used 2019 Lamborghini Aventador
          </h5>
          <span className='miles'>
            11467 Miles
          </span>
          <span className="AWD">
            AWD 4-Cylinder Turbo
          </span>
          <div className="price_buyBtn flex">
            <span className="price">
              $98,000
            </span>
            <span className="buyBtn">
                Buy Now
            </span>
            </div>
          </div>
          {/* single car div */}
          <div className="singleCar grid singlecarActive">
            <div className="imgDiv">
            <img src={car6} alt="car image" />
          </div>
          <h5 className="carTitle">
            Used 2019 Lamborghini Huracan
          </h5>
          <span className='miles'>
            11467 Miles
          </span>
          <span className="AWD">
            AWD 4-Cylinder Turbo
          </span>
          <div className="price_buyBtn flex">
            <span className="price">
              $85,000
            </span>
            <span className="buyBtn">
                Buy Now
            </span>
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default Auction
