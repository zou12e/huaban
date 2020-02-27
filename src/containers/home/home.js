/* eslint-disable react/no-unused-state */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './home.scss';

class App extends Component {
  state = {id: 2, sex: 1}
  render() {
    return (
      <div>
        <h1>HOME</h1>
        <Link to={`/list/${this.state.id}`}>
          <div>
            go to list
          </div>
        </Link>

        <button onClick={() => this.props.history.push({
          pathname: '/list',
          state: {
            id: 5
          }
        })}
        >通过函数跳转</button>
      </div>
    );
  }
}
export default App;

