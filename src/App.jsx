import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="container">
          <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
          <p className="text-center">
            <button className="btn btn-primary mr-2" >Increase</button>
            <button className="btn btn-danger my-2">Decrease</button>
          </p>
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

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
