import React from 'react'
import './Sellers.css'

//importing images
import carImage1 from '../../assets/carImage1.jpg'
import carImage2 from '../../assets/carImage2.png'
import carImage3 from '../../assets/carImage3.jpg'
import carImage4 from '../../assets/carImage4.png'


const Sellers= () => {
  return (
    <div className='sellers section'>
      <div className="secContainer container">
        <div className="secHeading grid">
          <h3 className="secTitle">
            Explore top sellers in town
          </h3>

          <p>Joseph Samuel Girard holds the Guiness world Record for being
             the greatest salesman in the world.</p>
        </div>

        <div className="sellerContainer grid">

          {/* single seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={carImage4} alt='' className='img'/>
            </div>
            <span className="info">
              <h4 className="name">Toyota
              </h4>
             <p>from 40$K</p>
            </span>
          </div>

          {/* single seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={carImage3} alt='' className='img'/>
            </div>
            <span className="info">
              <h4 className="name">Rolls Royce
              </h4>
             <p>from 50$K</p>
            </span>
          </div>

          {/* single seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={carImage2} alt='' className='img'/>
            </div>
            <span className="info">
              <h4 className="name">Lamborgini
              </h4>
             <p>from 80$K</p>
            </span>
          </div>

          {/* single seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={carImage1} alt='' className='img'/>
            </div>
            <span className="info">
              <h4 className="name">Mustang
              </h4>
             <p>from 100$K</p>
            </span>
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default Sellers
