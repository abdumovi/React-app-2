import React,{Component} from "react";
import HeroCounter from "./hero-counter/HeroCounter";
import "../hero.css";

class HeroMiddle extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="hero__content col-md-4">
        <div className="hero__cont-item">
          <p className="hero__title">Motto</p>
          <h2 className="hero__inner-title"> REFRIED BAYO BEANS POUCH </h2>
          <p className="hero__pricet">Pack Size: 12/15 oz  </p>
          <p className="hero__pricet">Units per case: 12</p>
          <hr className="hero__hr" />
          <HeroCounter />
        </div>
      </div>
    )
  }
}
export default HeroMiddle;