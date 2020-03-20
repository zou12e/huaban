import React, {Component} from 'react';
// import './board-list.scss';

class BoardList extends Component {
  render() {
    const {className} = this.props;
    return (
      <div className={`hb-list-box clear ${className}`}>
        {this.getList()}
      </div>
    );
  }
  getList() {
    const {list} = this.props;
    if (list.length === 0) {
      return (
        <div className="center" >
          LOADING...
        </div>
      );
    }
    return list.map(item => (
      <div key={item.id} className="hb-list-board " onClick={this.goToList.bind(this, item)} >
        {this.isOriginal(item.original)}
        <div className="cover" style={{backgroundImage: `url(${item.cover})`}} >
          <div className="over" >
            <div className="title" >{item.name}</div>
            <div className="follow" >{item.follows} 关注</div>
          </div>
        </div>
        <div className="board-size" >
          {item.list.length} 作品
        </div>
      </div>
    ));
  }
  goToList(item) {
    this.props.history.push({
      pathname: `/list/${item.id}`,
      state: {
        info: this.props.info,
        data: item
      }
    });
  }
  isOriginal(isOriginal) {
    return isOriginal === 1 ? (
      <div className="original">
        原创
      </div>
    ) : (
      <span />
    );
  }
}


export default BoardList;
