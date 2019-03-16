import React, {Component} from 'react';
import {connect} from 'react-redux';
import { get_user } from '../actions';
class User extends Component {

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    const {get_user, user} = this.props;
    return (
        <div>
          <h1 className="jumbotron-heading text-center">{user.email}</h1>
          <p className="text-center">
            <button className="btn btn-primary mr-2" onClick={() => get_user()}>GET RANDOM USER</button>
          </p>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps =(displ)=>{

}

export default connect(mapStateToProps,{ get_user })(User)
