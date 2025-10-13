import React from 'react'
import leetcodeLogo from "../../images/leetcode.png";
import gfg from "../../images/gfg.png"
import "./footer.css"
export const Footer = () => {
  return (
  <footer className='footer'>
    <div className="footer__container container">
    <h1 className="footer__title">Mohammad Zaid Hassan</h1>
    <ul className="footer__list">
      <li>
        <a href="#about" className="footer__link">About</a>
      </li>
      <li>
        <a href="#home" className="footer__link">Portfolio</a>
      </li>
      <li>
        <a href="#service" className="footer__link">Service</a>
      </li>
    </ul>
    <div className="footer__social">
    <a href="https://www.linkedin.com/in/mohammad-zaid-hassan-746b88389/https://leetcode.com/u/hassanzaidmd/"  className="footer__social-icon" target="blank">

<i className="uil uil-linkedin"></i>
</a>

<a href="https://leetcode.com/u/hassanzaidmd/" className="footer__social-icon" target="blank">
<img src={leetcodeLogo} alt="leetcode" className="uil"  style={{height:20}} />
</a>
<a href="https://www.geeksforgeeks.org/user/hassanzcg5r/"  className="footer__social-icon" target="blank">

<i className="uil "><img src={gfg} alt="" className="uil"style={{height:20}} /></i>

</a>

<a href="https://github.com/hassanzaidmd" className="footer__social-icon" target="blank">
<i className="uil uil-github"></i>
</a>
    </div>

    <span className='footer__copy'>&copy; Cryticalcoder. All rights reserved</span>
    </div>
  </footer>
  )
}
