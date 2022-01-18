import React,{Component} from "react";
import "../../hero.css";

class HeroLeftSlider extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="hero__slider">
       <button className="btn hero__btn"><img src="https://images.epallet.com/production/media/cache/c2/f0/c2f0710f51f5713ec1d8d6b980ac46de.jpg" alt="img" /></button>
       <button className="btn hero__btn"><img src="https://images.epallet.com/production/media/cache/c2/f0/c2f0710f51f5713ec1d8d6b980ac46de.jpg" alt="img" /></button>
       <button className="btn hero__btn"><img src="https://images.epallet.com/production/media/cache/c2/f0/c2f0710f51f5713ec1d8d6b980ac46de.jpg" alt="img" /></button>
       <button className="btn hero__btn"><img src="https://images.epallet.com/production/media/cache/c2/f0/c2f0710f51f5713ec1d8d6b980ac46de.jpg" alt="img" /></button>
       <button className="btn hero__btn"><img src="https://images.epallet.com/production/media/cache/c2/f0/c2f0710f51f5713ec1d8d6b980ac46de.jpg" alt="img" /></button>
      </div>
    )
  }
}
export default HeroLeftSlider;