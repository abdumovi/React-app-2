import React,{Component} from "react";
import "../header.css";
class HeaderLeft extends Component{
  constructor(props){
    super(props);
    this.len = this.props.len;
  }
  render(){
    return(
      <div className="site-header__left">
        <select className="form-select site-header__select" >
          {this.len.map((i,e)=>(<option key={e} className="site-header__val">{i}</option>))}
        </select>
        <div className="site-header__info">
          <span className="site-header__img">
            <img className="site-header__log" src="https://epallet.com/assets/images/map-icon.svg" alt="cl" />  
          </span>  
          <span className="site-header__img-span">Austin, TX<i className="bi bi-chevron-down"></i></span>
        </div>
      </div>
    )
  }
}
export default HeaderLeft;