import React, {Component} from 'react';


export default class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
        <div className="container">
          <h1 className="jumbotron-heading text-center">1</h1>
          <p className="text-center">
            <button className="btn btn-primary mr-2">Increase</button>
            <button className="btn btn-danger my-2">Decrease</button>
          </p>
        </div>
    );
  }
}
