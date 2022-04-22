import React, { Component } from 'react';
import style from './Footer.module.css';
export default class Footer extends Component {
  render() {
    return (
     <div className={style.bg_footer+' pt-5 pb-5' }>
          <div className="container">
              <div className="row">
                  <div className="col-lg-4">
                      <h2 className={style.font_25+ ' font-weight-bold  text-center text-white text-uppercase'}>location</h2>
                     <div className="d-flex justify-content-center ">
                     <p className={style.font_20+' '+style.w_65+  ' mt-3 text-center text-white'}>2215 John Daniel Drive Clark, MO 65243</p>

                     </div>
                  </div>
                  <div className="col-lg-4">
                        <h2 className={style.font_25+ ' font-weight-bold text-center text-white text-uppercase'}>around the web</h2>
                        <div className="d-flex justify-content-center p-3">
                            <span className={style.circle+'  mr-2 rounded-circle'}>
                                <div className="d-flex justify-content-center align-items-center h-100">
                                    <i className={style.font_20+" fab fa-facebook-f "}></i>
                                </div>
                              
                            </span>
                            <span className={style.circle+'  mr-2 rounded-circle'}>
                            <div className="d-flex justify-content-center align-items-center h-100">
                                     <i className={style.font_20+" fab fa-twitter "}></i>
                                </div>
                            </span>
                            <span className={style.circle+'  mr-2 rounded-circle'}>
                            <div className="d-flex justify-content-center align-items-center h-100">
                            
                            <i className={style.font_20+" fab fa-linkedin-in "}></i>
                                </div>
                            </span>
                            <span className={style.circle+'  mr-2 rounded-circle'}>
                            <div className="d-flex justify-content-center align-items-center h-100">
                           
                            <i className={style.font_20+" fab fa-dribbble "}></i>
                                </div>
                            </span>

                        </div>
                  </div>
                  <div className="col-lg-4">
                      <h2 className={style.font_25+ ' font-weight-bold text-center text-white text-uppercase'}>about freelancer</h2>
                     <div className="d-flex justify">

                     </div>
                     <div className="d-flex justify-content-center ">
                     <p className={style.font_20+' '+style.w_65+  ' mt-3 text-center text-white'}>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href='#' className={style.link_color+' text-decoration-none '}><u>Start Bootstrap</u> </a>.</p>

                     </div>                  
                     </div>
              </div>
          </div>
     </div>
    )
  }
}
