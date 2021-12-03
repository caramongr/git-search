import React, {Component} from 'react';
import {Button,Jumbotron} from 'react-bootstrap';

class JumboTronComponent extends Component {

    constructor(props){
      super(props);    
    }
  
    render() { 
      return (
        <div>                
        <div>
              <h1>Hello, world!</h1>
             <p>{this.props.children}</p>
              <p><Button bsStyle="primary">Learn more</Button></p> }
  </div>                                                                                                                           
        </div>
      );
    }  
  }
  
  export default JumboTronComponent;