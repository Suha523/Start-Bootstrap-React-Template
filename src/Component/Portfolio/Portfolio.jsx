import React, { Component } from 'react';
import style from './Portfolio.module.css';
import cabin from '../../assets/imgs/cabin.png';
import cake from '../../assets/imgs/cake.png';
import circus from '../../assets/imgs/circus.png';
import game from '../../assets/imgs/game.png';
import safe from '../../assets/imgs/safe.png';
import submarine from '../../assets/imgs/submarine.png';

export default class Portfolio extends Component {
    state={
       imgs:[
           {id:1, name:'cabin', src:cabin},
           {id:2, name:'cake', src:cake},
           {id:3, name:'circus', src:circus},
           {id:4, name:'game', src:game},
           {id:5, name:'safe', src:safe},
           {id:6, name:'submarine', src:submarine},    
       ]
    }
    
  render() {
    // console.log(this.state.imgs);
    return (
      
          <div className="container pt-5">
              <h2 className={style.portfolio_color+' '+style.font_50 +' text-center mt-5 text-uppercase mb-3 font-weight-bold'}>portfolio</h2>
              <div className='d-flex justify-content-center mb-5'>
                 <span className={style.divider_line+' mt-3'}></span>
                 <i className={style.font_30+' '+style.portfolio_color+' fas fa-star ml-3 mr-3'}></i>
                 <span className={style.divider_line+' mt-3'}></span>
              </div>
             
              <div className="row">
                  {this.state.imgs.map((img,index)=>
                  
                  <div key={index} className="col-lg-4 mb-5 ">
                         <img  className={style.round+' position-relative'} alt={img.name} src={img.src} height='100%' width='100%' />
                         <div className={style.round+' '+style.overlay+' '+style.w_92+' '+style.h_100 + " position-absolute"}>
                            <div className="d-flex h-100 justify-content-center align-items-center">
                            <i className={style.font_70+" fas fa-plus text-white"}></i>
                                </div> 
                           
                         </div>
                  </div>
                     
                  
                      
                    
                  )}
                 
                 
              </div>
          </div>

     
    )
  }
}
