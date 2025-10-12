import React from "react";
import leetcodeLogo from "../../images/leetcode.png";
import gfg from "../../images/gfg.png"

const Social=()=>{

    return(
        <div className="home__social">
        
            <a href="https://www.linkedin.com/in/khush-alam-87134b2b9/" className="home__social-icon" target="blank">

                <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://leetcode.com/u/KHUSHALAM/" className="home__social-icon" target="blank">
            <img src={leetcodeLogo} alt="leetcode" className="uil"  style={{height:20}} />
            </a>
              <a href="https://www.geeksforgeeks.org/user/khush7xg05/" className="home__social-icon" target="blank">
              
              <i className="uil "><img src={gfg} alt="" className="uil"style={{height:20}} /></i>
              
              </a>

              <a href="https://github.com/KhushAlam" className="home__social-icon" target="blank">
              <i className="uil uil-github"></i>
              </a>

             
              
        </div>
           
    
    )
}
export default Social