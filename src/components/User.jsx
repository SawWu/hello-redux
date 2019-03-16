import React, {Component} from 'react';
import {connect} from 'react-redux';

class User extends Component {
  render() {
    return (
        <div>
          <h1 className="jumbotron-heading text-center"></h1>
          <p className="text-center">
            <button className="btn btn-primary mr-2">GET RANDOM USER</button>
          </p>
        </div>
    )
  }
}

export default connect()(User)
