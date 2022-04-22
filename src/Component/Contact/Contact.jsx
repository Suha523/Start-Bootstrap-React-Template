import React, { Component } from 'react';
import style from './Contact.module.css';
// import {CFormFloating , CFormInput, CFormLabel} from '@coreui/react/dist/components/form/CFormFloating.d.ts';

export default class Contact extends Component {
  floatLabel(){
    // let label = document.getElementsByTagName('label');
    
  }
  render() {
    
    return (
      <div className='vh-100'>
       
              <h2 id='text' className={style.contact_color+' '+style.font_50 +' text-center mt-5 text-uppercase mb-3 font-weight-bold'}>contact me</h2>
              <div className='d-flex justify-content-center mb-5'>
                 <span className={style.divider_line+' mt-3'}></span>
                 <i className={style.font_30+' '+style.contact_color+' fas fa-star ml-3 mr-3'}></i>
                 <span className={style.divider_line+' mt-3'}></span>
              </div>
              <div className="container">
                <div className="d-flex justify-content-center">
                {/* <CFormFloating className="mb-3">
  <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
  <CFormLabel htmlFor="floatingInput">Email address</CFormLabel>
</CFormFloating>
<CFormFloating>
  <CFormInput type="password" id="floatingPassword" placeholder="Password" />
  <CFormLabel htmlFor="exampleFormControlTextarea1">Password</CFormLabel>
</CFormFloating> */}
      <form className='form w-50'>
                
          <div className="form-group">
          {/* <label onClick={this.floatLabel} className={style.form_control_placeholder}>Full Name</label> */}
            <input  type="text" className="form-control border-top-0 border-right-0 border-left-0 shadow-none rounded-0" placeholder='Full Name' required></input>
          
          </div>
          <div className="form-group">
            {/* <label  className={style.form_control_placeholder}>Email address</label> */}
            <input type="email" className="form-control border-top-0 border-right-0 border-left-0 shadow-none rounded-0" placeholder='Email address' required></input>
            
          </div>
          <div className="form-group">
          {/* <label className={style.form_control_placeholder}>Phone Number</label> */}
            <input type="number" className="form-control border-top-0 border-right-0 border-left-0 shadow-none rounded-0" placeholder='Phone Number' required></input>
          
          </div>
        
          <div className="form-group">
          {/* <label className={style.form_control_placeholder}>Message</label> */}
            <textarea className="form-control border-top-0 border-right-0 border-left-0 shadow-none rounded-0" placeholder='Message' rows="3" required></textarea>
            
          </div>
          <button type="submit" class={style.bg_btn+ " rounded border-0 pt-2 pb-2 pr-4 pl-4 mb-2"}>Send</button>
</form>


                </div>
              </div>
           
             
      </div>
    )
  }
}
