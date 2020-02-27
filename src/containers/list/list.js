import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>LIST</h1>
        <Link to="/home">
          <div>
            回到home
          </div>
        </Link>
        <div onClick={this.handleBrowserChange} >
          回到home2
        </div>
      </div>
    );
  }
  handleBrowserChange = () => {
    const {history} = this.props;
    history.push('/home');
  }
  componentDidMount() {
    console.log(this.props.history.location.state);
    console.log(this.props.match.params);
  }
}

export default App;

