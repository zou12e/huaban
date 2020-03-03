import React, {Component} from 'react';
import axios from 'axios';
import List from '~/components/list/list';
import BoardList from '~/components/board-list/board-list';
import './home.scss';


class App extends Component {
  state = {
    tabsActice: 1,
    list: [],
    board: [],
    info: {}
  }
  render() {
    const {
      tabsActice, list, info, board
    } = this.state;
    const boardSize = list.length;
    let allSize = 0;
    const boardOriginalSize = list.filter(item => {
      allSize += item.list.length;
      return item.original === 1;
    }).length;

    return (
      <div className="hb-main content" >
        <div className="hb-top-box" >
          <div className="hb-head-box" >
            <img src={info.head} className="logo" />
            <div className="hb-fans-info">
              <div className="box" >
                <p className="data" >
                  {info.fans}
                </p>
                <p>粉丝</p>
              </div>
              <div className="box bor-l" >
                <p className="data" >
                  {info.follows}
                </p>
                <p>关注</p>
              </div>
            </div>
          </div>
          <div className="hb-info-box" >
            <div className="name">
              {info.name}
            </div>
            <div className="introduction">
              <span>{info.sex}</span>
              <span>{info.address}</span>
              <span>{info.horoscope}</span>
              <span>{info.job}</span>
            </div>
            <div className="about">
              <span>{info.introduction}</span>
            </div>
            {/* {this.getMenuItems()} */}
          </div>
          <div className="hb-info-tabs bor-t">
            <span onClick={() => { this.changeTabsActice(1); }} className={tabsActice === 1 ? 'actice' : ''} >{boardSize} 画板</span>
            <span onClick={() => { this.changeTabsActice(2); }} className={tabsActice === 2 ? 'actice' : ''}>{allSize} 采集</span>
            <span onClick={() => { this.changeTabsActice(3); }} className={tabsActice === 3 ? 'actice' : ''}>{boardOriginalSize} 原创画板</span>
          </div>
        </div>
        <BoardList info={info} history={this.props.history} list={board} className={tabsActice === 1 || tabsActice === 3 ? '' : 'hide'} />
        <List list={this.getAllList()} className={tabsActice === 2 ? '' : 'hide'} />
      </div>
    );
  }
  changeTabsActice(tabsActice) {
    this.setState({
      tabsActice
    });
    if (tabsActice === 1) {
      this.setState({
        board: this.state.list
      });
    }
    if (tabsActice === 3) {
      this.setState({
        board: this.state.list.filter(item => item.original === 1)
      });
    }
  }
  componentDidMount() {
    axios.get('http://mock-api.com/NnXRADzy.mock/api/v1/board/list')
      .then((res) => {
        this.setState({
          list: res.data,
          board: res.data
        });
      });
    axios.get('http://mock-api.com/NnXRADzy.mock/api/v1/user/info')
      .then((res) => {
        this.setState({
          info: res.data
        });
      });
  }
  getAllList() {
    const list = [];
    this.state.list.map(item => item.list.map(ite => { list.push(ite); }));
    return list;
  }
}
export default App;

