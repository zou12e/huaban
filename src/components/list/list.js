import React, {Component} from 'react';
import './list.scss';

class List extends Component {
  render() {
    const {className} = this.props;
    return (
      <div className={`hb-detail-list-box ${className}`}>
        {this.getList()}
      </div>
    );
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
      <div className="cover" key={ind}>
        <img src={item} />
      </div>
    ));
  }
}


export default List;
