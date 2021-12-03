import React , { Component } from 'react';
import Rating from './Rating';
import {Container,Row, Col} from 'react-bootstrap';


class Product extends Component {

    constructor(props){
      super(props);    
    }
  
    render() { 
      return (
        <div>                
<Container>
<Row >
<Col xs={3}  lg={1}>
              <img 
                  width={64} 
                  height={64} 
                  className="mr-3"
                  src={this.props.data.imageUrl} 
                  
                  alt="Image"
              />
       </Col>
       <Col xs={9} lg={6}>
                  <h5>{this.props.data.productName}</h5>
                  { this.props.data.releasedDate }
                  <Rating rating={this.props.data.rating} numOfReviews={this.props.data.numOfReviews}/>
                  <p>{this.props.data.description}</p>
                  </Col>

                  </Row>
                </Container>                                                                                                                             
        </div>
      );
    }
  }
  
  export default Product;