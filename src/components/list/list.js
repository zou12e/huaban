import React, {Component} from 'react';
// import './list.scss';

class List extends Component {
  state = {
    show: false,
    current: '',
    index: 0,
    top: '0px'
  }
  render() {
    const {className, list} = this.props;
    const {
      show,
      current,
      index,
      top
    } = this.state;
    return (
      <div className="hb-detail" >
        <div className={`hb-detail-list-box ${className}`}>
          {this.getList()}
        </div>
        <div
          className={`hb-popup ${show ? '' : 'hide'}`}
          onClick={this.closeImg.bind(this)}
          style={{overflowY: this.hasScrollbar() ? 'scroll' : 'auto'}}
        >
          <div
            className={`before ${index === 0 ? 'unseen' : ''}`}
            onClick={this.changeImg.bind(this, -1)}
          >
            上一个
          </div>
          <div
            className="img-box"
            style={{top}}
          >
            <img
              ref="img"
              src={current}
              onLoad={ev => {
                this.setBoxTop(ev.currentTarget.height);
              }}
            />
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
    if (this.hasScrollbar()) {
      this.scrollbar('hidden');
    }
  }
  closeImg() {
    this.setState({show: false});
    this.scrollbar('auto');
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
  hasScrollbar() {
    const h = window.innerHeight || document.documentElement.clientHeight;
    return document.body.scrollHeight > h;
  }
  scrollbar(res) {
    const htmlStyle = document.body.parentNode.style;
    htmlStyle.overflowY = res;
    htmlStyle.marginRight = res === 'hidden' ? '15px' : '0px';
  }
  setBoxTop(height) {
    let top = '0px';
    if (this.getClientHeight() > height) {
      top = `${(this.getClientHeight() - height) / 2}px`;
    }
    this.setState({
      top
    });
  }
  toTop() {
    document.body.scrollTop = 0;
  }
  getClientHeight() {
    return window.innerHeight;
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
