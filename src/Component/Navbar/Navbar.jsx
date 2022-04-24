import React, { Component } from 'react';
import style from './Navbar.module.css';
// import  Collapse from 'bootstrap/dist/js/bootstrap.min.js';
export default class Navbar extends Component {
  render() {
   
    return (
        <nav className={style.bg_navbar +' navbar fixed-top navbar-expand-lg'}>
        <a className="ml-5 navbar-brand text-uppercase font-weight-bold text-white" href="#"><p className={style.font_30}>start bootstrap</p></a>
        <button className={"rounded border-0 p-2 navbar-toggler"} type="button" data-toggle='collapse' data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <i className="fas fa-bars mr-2"></i>Menu
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <a className={style.hoverClassColor+" nav-link text-uppercase font-weight-bold text-white"}
              style={{'--blue-green-color':'rgb(26, 188, 156)'}}
               href="#">portfolio</a>
            </li>
            <li className="nav-item mr-3">
              <a className={style.hoverClassColor+" nav-link text-uppercase font-weight-bold text-white"}
              style={{'--blue-green-color':'rgb(26, 188, 156)'}} href="#">about</a>
            </li>
            <li className="nav-item mr-3">
              <a className={style.hoverClassColor+" nav-link text-uppercase font-weight-bold text-white"}
              style={{'--blue-green-color':'rgb(26, 188, 156)'}} href="#">contact</a>
            </li>
          
          </ul>
          
        </div>
      </nav>
    )
  }
}
