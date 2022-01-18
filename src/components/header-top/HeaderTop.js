import React,{Component} from 'react';
import './header.css';
import HeaderLeft from './header-left/HeaderLeft';
import HeaderRigiht from './header-rigiht/HeaderRigiht';
const lenguage = ['En','UZ','RU',];
class HeaderTop extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='siyte-header'>
        <div className='container site-header__container'>
          <HeaderLeft len={lenguage}/>
          <HeaderRigiht />
        </div>
      </div>
    )
  }
}
export default HeaderTop;