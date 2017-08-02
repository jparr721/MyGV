import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

// Icons
import AccountBoxIcon from 'material-ui-icons/AccountBox';
import InboxIcon from 'material-ui-icons/Inbox';
import AttachMoneyIcon from 'material-ui-icons/AttachMoney';
import SchoolIcon from 'material-ui-icons/School';
import DashboardIcon from 'material-ui-icons/Dashboard';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styleSheet = createStyleSheet({
  list: {
    width: 300,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
});

class SideMenu extends Component {
  state = {
    open: {
      left: false,
    },
  };

  toggleDrawer = (side, open) => {
    const drawerState = {};
    drawerState[side] = open;
    this.setState({ open: drawerState });
  };

  handleLeftOpen = () => this.toggleDrawer('left', true);
  handleLeftClose = () => this.toggleDrawer('left', false);

  render() {
    const classes = this.props.classes;

    const mailFolderListItems = (
      <div>
        <Link to='/'><ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem></Link>
        <Divider />
        <Link to='/account'><ListItem button>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem></Link>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Academic" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </div>
    );



    const sideList = (
      <div>
        <List className={classes.list} disablePadding>
          {mailFolderListItems}
        </List>
      </div>
    );

    return (
      <div>
        <IconButton color="contrast">
          <MenuIcon onClick={this.handleLeftOpen}>Open Left</MenuIcon>
        </IconButton>
        <Drawer
          open={this.state.open.left}
          onRequestClose={this.handleLeftClose}
          onClick={this.handleLeftClose}
        >
          {sideList}
        </Drawer>
      </div>
    );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SideMenu);
