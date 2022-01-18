import React, { Component } from "react";
import HeroLeft from "./hero-left/HeroLeft";
import HeroRigiht from "./hero-right/heroRigiht";
import HeroMiddle from "./hero-middle/HeroMiddle";
import "./hero.css"
class Hero extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="hero__container container">
        <div className="row">
          <HeroLeft />
          <HeroMiddle />
          <HeroRigiht />
        </div>
      </div>
    )
  }
}
export default  Hero;
