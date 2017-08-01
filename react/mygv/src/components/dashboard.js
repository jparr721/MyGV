import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import InfoCard from './common/infoCard';
import Grades from './common/grades';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = createStyleSheet(theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
  },
}));

class Dashboard extends Component {

  render() {
    const classes = this.props.classes;
    return (
      <div id="dashboard" className="row">
        <div className="col-5 cards">
          <InfoCard cardTitle="Grades" semester="Fall 2017">
            <Grades class="CIS 163" grade="B+" status='success' />
            <Grades class="CIS 163" grade="B+" status='success' />
            <Grades class="CIS 163" grade="B+" status='success' />
            <Grades class="CIS 163" grade="B+" status='success' />
            <Grades class="CIS 163" grade="B+" status='success' />
          </InfoCard>
          <InfoCard cardTitle="Schedule" semester="Fall 2017">
          </InfoCard>
        </div>
        <div className="col-4 info">
          <Typography className="text-center" type="headline" color="accent">
            <h1>Events</h1>
          </Typography>
        </div>
        <div className="col-3">
          <img className="img-responsive" src="http://via.placeholder.com/250x200"/>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
