import React, {Component} from 'react';
import {Container, Button} from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as types from './actions';

class App extends Component {
  render() {
    const {increment, decrement} = this.props;
    return (
      <div className="App">
        <Container style={{margin: '40px auto 0'}}>
          <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
          <p className="text-center">
            <Button color="primary" onClick={() => increment()} style={{margin: '20px'}}>Increase</Button>
            <Button color="danger" onClick={() => decrement()} style={{margin: '20px'}}>Decrease</Button>
          </p>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(types, dispatch);
};

App.propTypes = {
  counter: PropTypes.number.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
