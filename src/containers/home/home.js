/* eslint-disable react/no-unused-state */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import head from '~/assets/head.jpeg';
import axios from 'axios';

import './home.scss';

class App extends Component {
  state = {
    tabsActice: 2,
    list: [],
    info: {}
  }
  render() {
    const {tabsActice, list, info} = this.state;
    const boardSize = list.length;
    const boardOriginalSize = list.filter(item => item.original === 1).length;
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
            <span onClick={() => { this.changeTabsActice(2); }} className={tabsActice === 2 ? 'actice' : ''}>{boardOriginalSize} 采集</span>
            <span onClick={() => { this.changeTabsActice(3); }} className={tabsActice === 3 ? 'actice' : ''}>{boardOriginalSize} 原创画板</span>
          </div>
        </div>
        <div className="bb-list-box" >
          {this.getBoardList()}
        </div>
        {/* <h1>HOME</h1>
        <Link to={`/list/${this.state.id}`}>
          <div>
            go to list
          </div>
        </Link>
        <i className="iconfont icon-bussiness-man" />
        <button
          className="transitions"
          onClick={() => this.props.history.push({
            pathname: '/list',
            state: {
              id: 5
            }
          })}
        >通过函数跳转</button> */}
      </div>
    );
  }
  changeTabsActice(tabsActice) {
    this.setState({
      tabsActice
    });
  }
  componentDidMount() {
    axios.get('http://mock-api.com/NnXRADzy.mock/api/v1/board/list')
      .then((res) => {
        this.setState({
          list: res.data
        });
      });
    axios.get('http://mock-api.com/NnXRADzy.mock/api/v1/user/info')
      .then((res) => {
        this.setState({
          info: res.data
        });
      });
  }
  getBoardList() {
    return this.state.list.map(item => (
      <div key={item.id} className="hb-list-board" >
        <div className="cover" >
          <img src={item.cover} />
          <div className="over" >
            <div className="title" >{item.name}</div>
            <div className="follow" >{item.follows} 关注</div>
          </div>
        </div>
      </div>
    ));
  }
  getMenuItems() {
    return this.state.list.map(item => (
      <div key={item.id}>
        <i type={item.icon} />{item.title}
      </div>
    ));
  }
}
export default App;

