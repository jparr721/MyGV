import React, { Component } from 'react';

class Grades extends Component {
  // const statusColor = card-[this.props.status];
  //
  // switch(this.props.status){
  //   case 'success':
  //     statusColor = card-success
  // }
  render() {
    return (
      <div className="card card-inverse card-success mb-3">
        <div className="card-header">{this.props.class}</div>
        <div className="card-block">
          <h3 className="card-title">{this.props.grade}</h3>
        </div>
      </div>
    );
  }
}

export default Grades;
