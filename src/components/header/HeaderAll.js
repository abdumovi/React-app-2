import React, { Component } from 'react';
import './headerAll.css';
import HeaderInput from './headerInput/HeaderInput';
import HeaderCart from './headerCart/HeaderCart';
import HeaderNav from './header-nav/HeaderNav';

const navlst = ['Retail ',' Foodservice ',' Industrial ',' Specials ',' Non-Food ',' K12/Schools ']
class HeaderAll extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header className='header'>
        <div className='container header__container'>
          <div className='header__component'>
            <HeaderInput />
            <HeaderCart />
          </div>
          <HeaderNav navlst={navlst}/>
        </div>
      </header>
    )
  }
}
export default HeaderAll;