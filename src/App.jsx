import React, {Component} from 'react';
import User from './components/User'
import {connect} from 'react-redux';
import {increment, decrement} from './actions';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const {increment, decrement} = this.props;
    return (
        <div className="container" style={{margin: '50px auto 0'}}>
          <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
          <p className="text-center">
            <button className="btn btn-primary mr-2" onClick={() => {
              increment()
            }}>Increase
            </button>
            <button className="btn btn-danger my-2" onClick={() => {
              decrement()
            }}>Decrease
            </button>
          </p>
          <User/>
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
  console.log(dispatch)
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
