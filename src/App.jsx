import React, {Component} from 'react';
import {Container, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {increment, decrement} from './actions';

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
  return {
    increment: (name) => {
      dispatch(increment(name))
    },
    decrement: (name) => {
      dispatch(decrement(name))
    }
  }
};

App.propTypes = {
  counter: PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


