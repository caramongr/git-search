import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {Container,Row, Col, Form, FormGroup, FormControl, Button} from 'react-bootstrap';

class GitHub extends Component {

constructor(props) {
    super(props);
    this.state={
        isLoading: false,
        data:[],
        searchTerm:''
    }

    this.handleChange = this.handleChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount(){
    // this.getGitHubData('Greg');
  
}

getGitHubData(searchTerm) {
axios.get("https://api.github.com/search/users?q="+searchTerm)
.then(res=>{
    this.setState({
        isLoading: false,
        data: res.data.items
    })
console.log(res.data.items);
});
}

render(){

const listUsers = this.state.data.map((user) =>

<div>                
<Container>
  
<Row >
<Col xs={3}  lg={1}>
    <a href={user.html_url}>
              <img 
                  width={64} 
                  height={64} 
                  className="mr-3"
                  src={user.avatar_url} 
                  alt="Image"
              />
              </a>
       </Col>
       <Col xs={9} lg={6}>
                  <h5>Login: {user.login}</h5>
                  <p>{user.id}</p>
                  </Col>

                  </Row>
                </Container>   
                                                                                                                        
        </div>

)


    return(
        <div>

            <Container>
            <Row >

<Form inline onSubmit={this.handleSubmit}>
                <Form.Group controlId="formInlineName">                                    
                    <Form.Control 
                        type="text" 
                        value={this.state.searchTerm} 
                        placeholder="Enter Search Term" 
                        onChange={this.handleChange}
                    />
                </Form.Group>                            
                {' '}
                <Button type="submit">
                    Search
                </Button>
            </Form>  
            </Row>
            </Container>
            {
            this.state.isLoading && 
            <ReactLoading type="spinningBubbles" color="#444" />
            }
                            {listUsers}  
            </div>
    )
}


handleSubmit(e) {
    e.preventDefault();    
    this.setState({
        isLoading : true          
    })                
    this.getGitHubData(this.state.searchTerm);        
}

handleChange(e) {
    this.setState({ searchTerm: e.target.value });        
}

}

export default GitHub