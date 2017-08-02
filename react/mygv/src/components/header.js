import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './common/dropdown';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import SideMenu from './common/sideMenu';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import SearchBar from './common/searchbar';



const styles = createStyleSheet({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  list: {
    width: 300,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
});

class Header extends Component {
  state = {
    open: false,
  };

  toggleDrawer = (side, open) => {
    const drawerState = {};
    drawerState[side] = open;
    this.setState({ open: drawerState });
  };

  handleOpen = () => this.toggleDrawer('left', true);
  handleClose = () => this.toggleDrawer('left', false);

  render(){
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <SideMenu />
            <Typography type="title" color="inherit" className={classes.flex}>
              MyGV&trade;
            </Typography>
            <SearchBar />
            <Dropdown userName="Stefferson, Stephanie"/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
