import React,{Component} from 'react';
import NavPath from './nav-path/NavPath'
import '../headerAll.css';
class HeaderNav extends Component{
  constructor(props){
    super(props);
    this.navlist = this.props.navlst;
    
  }
  render(){
    console.log(this.props);
    return(
      <nav className='header__nav nav'>
        <ul className='nav__list'>
          {this.navlist.map((i,e)=>(
          <li key={e} className='nav__item'>
            <a className='nav__link' href="#">{i}</a>
          </li>))}
        </ul>
        <NavPath />
      </nav>
      
    )
  }
}
export default HeaderNav