import React,{Component} from 'react';
import '../../headerAll.css';

class NavPath extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='nav__path'>
        <p className='nav__paths'>Product</p>
        <button className='nav__btn btn'><i className="bi bi-skip-backward-fill"></i></button>
      </div>
    )
  }
}
export default NavPath;