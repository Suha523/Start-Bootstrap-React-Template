import React, { Component } from 'react';
import style  from './About.module.css';
export default class About extends Component {
  render() {
    return (
      <div className={style.bg_about+' pt-5 pb-5'}>
          <h2 className={style.font_50+' text-center text-white mt-5 text-uppercase mb-3 font-weight-bold'}>About</h2>
              <div className='d-flex justify-content-center mb-5'>
                 <span className={style.divider_line+' mt-3'}></span>
                 <i className={style.font_30+' fas fa-star text-white ml-3 mr-3'}></i>
                 <span className={style.divider_line+' mt-3'}></span>
              </div>
             
                <div className="container-fluid">
                <div className="d-flex justify-content-center mb-4">
                 <div className={style.w_65+" row"}>
                     <div className="col-lg-6">
                         <p className={style.font_20+ ' text-white'}>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                     </div>
                     <div className="col-lg-6">
                         <p className={style.font_20+ ' text-white'}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                     </div>
                 </div>
               
                
                 </div>

                 <div className="d-flex justify-content-center">
                 
                 {/* <button className={style.border_2+ ' btn btn-outline-light'}>
                     <div className="d-flex">
                     <i className={style.font_20+" fa-solid fa-download mr-2 mt-1"}></i>
                         <p className={style.font_20+ ' text-capitalize'}>free download!</p>
                     </div>
                        
                </button> */}
                 </div>
                
                
                 </div>
        
             
              
          

      </div>

    )
  }
}
