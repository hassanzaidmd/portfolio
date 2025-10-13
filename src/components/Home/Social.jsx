import React from "react";
import leetcodeLogo from "../../images/leetcode.png";
import gfg from "../../images/gfg.png"

const Social=()=>{

    return(
        <div className="home__social">
        
            <a href="https://www.linkedin.com/in/mohammad-zaid-hassan-746b88389/" className="home__social-icon" target="blank">

                <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://leetcode.com/u/hassanzaidmd/" className="home__social-icon" target="blank">
            <img src={leetcodeLogo} alt="leetcode" className="uil"  style={{height:20}} />
            </a>
              <a href="https://www.geeksforgeeks.org/user/hassanzcg5r/" className="home__social-icon" target="blank">
              
              <i className="uil "><img src={gfg} alt="" className="uil"style={{height:20}} /></i>
              
              </a>

              <a href="https://github.com/hassanzaidmd" className="home__social-icon" target="blank">
              <i className="uil uil-github"></i>
              </a>

             
              
        </div>
           
    
    )
}
export default Social