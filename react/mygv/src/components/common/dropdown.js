import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import classNames from 'classnames';
import Avatar from 'material-ui/Avatar';

const styleSheet = createStyleSheet({
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
});

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
    const classes = this.props.classes;
    return (
      <div>
      <Avatar
        src={require('../../profile.jpg')}
        className={classNames(classes.avatar, classes.bigAvatar)}
        aria-owns="simple-menu"
        aria-haspopup="true"
        onClick={this.handleClick}/>

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

export default withStyles(styleSheet)(Dropdown);

// <Button color="contrast" aria-owns="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
//   {this.props.userName}
// </Button>
