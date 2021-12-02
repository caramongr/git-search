// import logo from './logo.svg';
// import './App.css';
import React , { Component } from 'react';
import Products from './Products'

class App extends Component{


  formatName(user){
return user.firstName + ' '+user.lastName;
  }

  render(){

const user = {
  firstName: 'Kostas',
  lastName:'Liakopoulos'
}


    return(
<div>
  <h1>hello, {this.formatName(user)}</h1>
  <Products />
  </div>
)


    }
}

export default App