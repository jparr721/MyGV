import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

class Dropdown extends Component {
  state = {
    anchorEl: undefined,
    open: false,
  };

  handleClick = (event) => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button color="contrast" aria-owns="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
          {this.props.userName}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}>

          <MenuItem onClick={this.handleRequestClose}>My Profile</MenuItem>
          <MenuItem onClick={this.handleRequestClose}>Settings</MenuItem>
          <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default Dropdown;
