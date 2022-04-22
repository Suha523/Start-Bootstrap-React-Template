import React, { Component } from 'react';
import style from './Home.module.css';
import avatar from '../../assets/imgs/avataaars.svg'

export default class Home extends Component {
  render() {
    return (
      <div className={style.bg_home+' vh-100'} >
          <div className='d-flex flex-column justify-content-center align-items-center h-100'>
             <img src={avatar} height='40%' width='40%' className='mt-5' />
             <h1 className={style.font_60+' text-uppercase text-white mt-3 font-weight-bold'}>start bootstrap</h1>
             <div className='d-flex mb-3'>
                 <span className={style.divider_line+' mt-3'}></span>
                 <i className={style.font_30+' fas fa-star text-white ml-3 mr-3'}></i>
                 <span className={style.divider_line+' mt-3'}></span>
             </div>
             <p className={style.font_25+' text-capitalize text-white mt-2'}>graphic artist - web designer - illustrator</p>
          </div>
           
      </div>
    )
  }
}
