import React,{Component} from "react";
import "../header.css";

class HeaderRigiht extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="site-header__rigiht">
        <a className="site-header__link" href="tel:1+(800)532 62 20">1+(800)532 62 20</a><a className="site-header__link link--one" href="#">Help Center</a>
      </div>
    )
  }
}
export default HeaderRigiht;