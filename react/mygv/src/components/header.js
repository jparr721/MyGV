import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './common/dropdown';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import DashboardIcon from 'material-ui-icons/Dashboard';

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
    const drawerListItems = (
          <div>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Schedule" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Map" />
            </ListItem>
          </div>
        );

        const sideList = (
          <div>
            <List className={classes.list} disablePadding>
              {drawerListItems}
            </List>
            <Divider />
          </div>
        );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu" onClick={this.handleOpen}>
              <MenuIcon />
            </IconButton>
            <Drawer

            open={this.state.open}
            onRequestClose={this.handleClose}
            onClick={this.handleClose}>
            {sideList}
            </Drawer>
            <Typography type="title" color="inherit" className={classes.flex}>
              MyGV&trade;
            </Typography>
            <Dropdown userName="Jeffries, Jim"/>
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
