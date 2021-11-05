

import React from "react";
import "../Styles/creative.css";
import Bg1 from '../img/bg2.jpg';
import Bg2 from '../img/bg3.jpg';
import Bg3 from '../img/bg4.jpg';
import Bg4 from '../img/bg5.jpg';

import {Link} from 'react-router-dom';

function creative() {
    return (
        <div className="creative-blogs comp-space" id="Creative">
          <div className="creative-section">
            <h1 className="heading">My Creative Blogs!</h1>
            <p className="creative-p">
             Read about my internet art.
            </p>
           
          </div>
           <div className="container">
               <div className="row">
                 
                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box-img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg1} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>

                         <div className="creative-log absolute">
                         <h5 className="creative-text">Creative Reflection</h5>
                         <h4 className="creative-text">A blog about the website's design</h4>
                         <Link to="/creativeone">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>
    
    
                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box-img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg2} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>
                         <div className="creative-log absolute">
                         <h5 className="creative-text">Internet Art proposal</h5>
                         <h4 className="creative-text">Read about my creative Bg!</h4>
                         <Link to="/creativetwo">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>
    
    
                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box__img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg3} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>
                         <div className="creative-log absolute">
                         <h5 className="creative-text">Art Prototype</h5>
                         <h4 className="creative-text">Look at my art</h4>
                         <Link to="/art">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>
    
    
                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box__img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg4} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>
                         <div className="creative-log absolute">
                         <h5 className="creative-text">Creative Reflection Two</h5>
                         <h4 className="creative-text">Getting tickets to the big show</h4>
                         <Link to="/creativeone">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>
    
    
                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box__img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg3} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>
                         <div className="creative-log absolute">
                         <h5 className="creative-text">More Art stuff</h5>
                         <h4 className="creative-text">art</h4>
                         <Link to="/creativeone">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>
    
    
                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box-img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg1} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>
                         <div className="creative-log absolute">
                         <h5 className="creative-text">Final Creative Reflection</h5>
                         <h4 className="creative-text">My final analysis on the website design</h4>
                         <Link to="/creativeone">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>
                 
                 <div className="more-btn display-flex align-center justify-center paddingxy-30">
                
                 <Link to="/theory">
            <button className="more-btn pointer btn">Read More</button>
                    </Link>
                 </div>
    
               </div>
           </div>
        </div>
      );
    }
  export default creative;