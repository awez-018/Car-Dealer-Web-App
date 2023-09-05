import React from 'react'
import './Footer.css'


const Footer= () => {
  return (
    <div className='footer'>
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">

          {/* single grid 1 */}
          <div className="singleGrid">
            <span className="footerTitle">
              About
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                How it works
              </li>
              <li className="footerLi">
                Careers
              </li>
              <li className="footerLi">
                Affiliates
              </li>
              <li className="footerLi">
                Media
              </li>
            </ul>
          </div>

          {/* single grid 2*/}
          <div className="singleGrid">
            <span className="footerTitle">
              Become Seller
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                Add Vehicles
              </li>
              <li className="footerLi">
                Resource Center
              </li>
              <li className="footerLi">
                Bonds
              </li>
              <li className="footerLi">
                Release Date
              </li>
            </ul>
          </div>

          {/* single grid 3*/}
          <div className="singleGrid">
            <span className="footerTitle">
              Community
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                Recommendations
              </li>
              <li className="footerLi">
                Gift Cards
              </li>
              <li className="footerLi">
                Top Ups
              </li>
              <li className="footerLi">
                Selling
              </li>
            </ul>
          </div>

          {/* single grid 4*/}
          <div className="singleGrid">
            <span className="footerTitle">
              Booking Support
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">
                Updates for Covid-19
              </li>
              <li className="footerLi">
                Help Center
              </li>
              <li className="footerLi">

                Garages
              </li>
              <li className="footerLi">
                
                Trust &  Safety
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Lower section */}
        <div className="lowerSection grid">
          <p>2023 All rights reserved </p>
          <blockquote>ABS Projects</blockquote>
        </div>
      </div>
     </div>
  )
}

export default Footer
