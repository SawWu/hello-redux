import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import PropTypes from 'prop-types';


import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="app" style={{margin: '100px auto 0'}}>
        <Container>
          <h1 className="jumbotron-heading text-center" style={{margin: '0 auto 30px'}}>{this.props.value}</h1>
          <p className="text-center">
            <Button color="primary" style={{marginRight: '30px'}} onClick={this.props.onIncrement}>INCREMENT</Button>
            <Button color="danger" style={{marginLeft: '30px'}} onClick={this.props.onDecrement}>DECREMENT</Button>
          </p>
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default App;
