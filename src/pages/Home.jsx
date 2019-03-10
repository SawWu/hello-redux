import React, {Component} from 'react';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      homeLink: props.initialName
    }
  }

  componentWillMount() {
    console.log("Component will mount");
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Component should update', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component will update', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update', prevProps, prevState);
  }


  handleGreet() {
    this.props.greet(this.props.age)
  }

  changeLink() {
    this.props.changeLink(this.state.homeLink)
  }

  handleChange(ev){
    this.setState({
      homeLink:ev.target.value
    })
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <div>your name is {this.props.name}, your age is {this.props.age}</div>
              <div>
                <h4>hobbies</h4>
                <ul>
                  {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                </ul>
                <Button color="primary" onClick={this.handleGreet.bind(this)}>Make me older</Button>{' '}
                <input
                    type="text"
                    defaultValue={this.props.initialName}
                    value={this.state.initialName}
                    onChange={this.handleChange.bind(this)}
                />
                <Button color="primary" onClick={this.changeLink.bind(this)}>Change Header Link</Button>{' '}
              </div>
              <div>{this.props.children}</div>
            </div>
          </div>
        </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired,
  initialName: PropTypes.string
};
