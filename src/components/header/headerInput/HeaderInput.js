import React, { Component } from 'react';
import '../headerAll.css';

class HeaderInput extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='header__inputs'>
        <a className='header__logo' href="#">
          <img src="https://epallet.com/assets/images/epallet-logo-blue.svg" alt="img" />
        </a>
        <i className="bi header__search bi-search"></i>
        <div className="input-group  header__input">
            <input type="text" className="form-control header__inp" placeholder='I’m looking for…' aria-label="Text input with dropdown button"/>
            <button className="btn dropdown-toggle" type="button"  data-bs-toggle="dropdown" aria-expanded="false">All Categories</button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Action</a></li>
            </ul>
        </div>
      </div>
    )
  }
}
export default HeaderInput;