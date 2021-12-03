// import logo from './logo.svg';
// import './App.css';
import React , { Component } from 'react';
import Products from './Products'
import {Button} from 'react-bootstrap';
import Rating from './Rating';
import JumboTronComponent from './JumboTronComponent';

class App extends Component{


  formatName(user){
return user.firstName + ' '+user.lastName;
  }

  render(){
const isValid = true;
const user = {
  firstName: 'Kostas',
  lastName:'Liakopoulos'
}


    return(
<div>
  <h1>hello, {this.formatName(user)}</h1>

  <JumboTronComponent>
  VVorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus
    </JumboTronComponent>
  <Products />
{/* <Rating rating="1" />
<Rating rating="2" />
<Rating rating="3" /> */}
  {/* <Button variant='primary' disabled={!isValid}>Default</Button> */}
  </div>
)


    }
}

export default App