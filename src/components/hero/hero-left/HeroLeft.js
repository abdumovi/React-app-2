import React,{Component} from "react";
import "../hero.css";
import HeroLeftSlider from "./left-lisder/HeroLeftSlider";

class HeroLeft extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="hero__content col-md-4">
        <div className="hero__img">
          <img src="https://images.epallet.com/production/media/cache/1e/9f/1e9fe3dda3adb2b34bc077dc4a258bb7.jpg" alt="img" />
        </div>
        <HeroLeftSlider />
      </div>
    )
  }
}
export default HeroLeft;