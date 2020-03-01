import React, {Component} from 'react';
import './list.scss';

class App extends Component {
  render() {
    const {info, data} = this.props.history.location.state;
    return (
      <div className="hb-list content" >
        <div className="hb-list-top" >
          <div className="category-info bor-b" >
            <span className="name">{data.name}</span>
            <span className="category bor-l">
              所属分类：
              <span>{data.category}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
  handleBrowserChange = () => {
    const {history} = this.props;
    history.push('/home');
  }
}

export default App;

