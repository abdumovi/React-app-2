import React,{Component} from "react";
import "../../hero.css";

class HeroCounter extends Component{
  constructor(props){
    super(props)
    this.state = {
      count:0,
    }
    this.decr = this.decr.bind(this);
    this.icr = this.icr.bind(this);
  }
  decr(){
    this.setState({count:this.state.count - 1})
  }
  icr(){
    this.setState({count:this.state.count + 1})
  }
  render(){
    return (
      <div className="hero__counter">
          <p className="hero__counter-price"> 32$ add csr</p>
          <div class="price">
          <button id="btns__icrem" onClick={this.decr} class="btn-decrease" type="button">-</button>
          <span class="span">{this.state.count}</span>
          <button id="btns__icrem" onClick={this.icr} class="btn-increase" type="button">+</button>
        </div>
      </div>
    )
  }
}
export default  HeroCounter;