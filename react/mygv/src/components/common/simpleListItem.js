import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

const styleSheet = createStyleSheet(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
}));

class SimpleListItem extends Component {
  render(){
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <List>
          <ListItem button>
            <ListItemText primary={this.props.text} secondary={this.props.subtext}/>
          </ListItem>
        </List>
      </div>
    );
  }
}

SimpleListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleListItem);
