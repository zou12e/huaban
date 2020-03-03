import React, {Component} from 'react';
import List from '~/components/list/list';
// import './list.scss';

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
        <div className="hb-list-bar" >
          <div className="head-info" onClick={this.handleBrowserChange} >
            <img className="head" src={info.head} />
            <span className="name">{info.name}</span>
          </div>
          <div className="about-info" >
            <div className="size bor-l bor-r" >
              {data.list.length}采集
            </div>
            <div className="follows" >
              被{data.follows}人关注
            </div>
          </div>
        </div>
        <List list={data.list} />
      </div>
    );
  }
  handleBrowserChange = () => {
    const {history} = this.props;
    history.push('/home');
  }
}

export default App;

