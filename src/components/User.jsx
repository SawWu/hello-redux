import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_user} from '../actions';

class User extends Component {

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    const { get_user } = this.props;

    const { error, isFetching, user } = this.props.user;

    let data;

    if (error) {
      data = error;
    } else if (isFetching) {
      data = "Loading...";
    } else {
      data = user.email;
    }

    return (
        <div>
          <h1 className="jumbotron-heading text-center">{data}</h1>
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

const mapDispatchToProps = (dispatch) => {
  return {
    get_user: () => {
      dispatch(get_user())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
