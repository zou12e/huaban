import React, {Component} from 'react';
import './list.scss';

class List extends Component {
  state = {
    show: false,
    current: '',
    index: 0
  }
  render() {
    const {className, list} = this.props;
    const {show, current, index} = this.state;
    return (
      <div>
        <div className={`hb-detail-list-box ${className}`}>
          {this.getList()}
        </div>
        <div
          className={`hb-popup ${show ? '' : 'hide'}`}
          onClick={this.closeImg.bind(this)}
        >
          <div
            className={`before ${index === 0 ? 'unseen' : ''}`}
            onClick={this.changeImg.bind(this, -1)}
          >
            上一个
          </div>
          <div className="img-box" >
            <img src={current} />
          </div>
          <div
            className={`next ${index === list.length - 1 ? 'unseen' : ''}`}
            onClick={this.changeImg.bind(this, 1)}
          >
            下一个
          </div>
        </div>
      </div>
    );
  }
  showImg(current, index) {
    this.setState({
      show: true,
      current,
      index
    });
  }
  closeImg() {
    this.setState({show: false});
  }
  changeImg(res, e) {
    const index = this.state.index + res;
    if (index > -1 && index < this.props.list.length) {
      this.setState({
        index,
        current: this.props.list[index]
      });
      e.stopPropagation();
    }
  }
  getList() {
    const {list} = this.props;
    if (list.length === 0) {
      return (
        <div className="centent center" >
          LOADING...
        </div>
      );
    }
    return list.map((item, ind) => (
      <div
        className="cover"
        key={ind}
        onClick={this.showImg.bind(this, item, ind)}
      >
        <img src={item} />
      </div>
    ));
  }
}


export default List;
