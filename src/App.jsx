import React, {Component} from 'react';
import {Container, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as types from './actions';
import {bindActionCreators} from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    const {increment, decrement} = this.props;
    return (
      <div className="app" style={{margin: '100px auto 0'}}>
        <Container>
          <h1 className="jumbotron-heading text-center" style={{margin: '0 auto 30px'}}>{this.props.counter}</h1>
          <p className="text-center">
            <Button color="primary" style={{marginRight: '30px'}}
                    onClick={() => increment('吴薇')}>INCREMENT</Button>
            <Button color="danger" style={{marginLeft: '30px'}}
                    onClick={() => decrement('周雪')}>DECREMENT</Button>
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
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


