import React, { Component } from 'react';

class Grades extends Component {

  render() {
    return (
      <div className={`card card-inverse ${ this.props.status } mb-3`}>
        <div className="card-header">{this.props.class}</div>
        <div className="card-block">
          <h3 className="card-title">{this.props.grade}</h3>
        </div>
        <div className="card-footer">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Grades;
