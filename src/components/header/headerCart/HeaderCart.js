import React,{Component} from 'react';
import '../headerAll.css';

class HeaderCart extends Component{
  constructor(props){
    super(props)
    
  }
  render(){
    return(
      <div className='header__carts'>
        <button className='header__btn'><i className="bi header__btn-icon bi-hdd"></i>Orders</button>
        <button className='header__btn'><i className="bi header__btn-icon bi-handbag"></i>Cart</button>
        <button className='header__btn'><i className="bi header__btn-icon bi-person"></i>Profile</button>
      </div>
    )
  }
}
export default HeaderCart