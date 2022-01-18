import React from "react";
import HeaderTop from "./components/header-top/HeaderTop";
import HeaderAll from "./components/header/HeaderAll";
import Hero from "./components/hero/Hero";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <section className="Header">
          <HeaderTop />
          <HeaderAll />
        </section>
        <section className="Hero">
          <Hero />
        </section>
      </>
    );
  }

}

export default App;
