import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

//External Components
import InfoCard from './common/infoCard';
import Grades from './common/grades';
import Feed from './feed';
import Modal from '../components/common/modal'

const styles = createStyleSheet(theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
  },
  eventSectionStyle: {
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
  },

}));

class Dashboard extends Component {

  render() {
    const classes = this.props.classes;
    return (
      <div id="dashboard" className="row">
        <div className="col-3 cards">
          <InfoCard cardTitle="Grades" subheading="Fall 2017">
            <Grades class="CIS 163" grade="B+" status='card-success' />
            <Grades class="MTH 202" grade="D" status='card-danger'>
              <Modal />
            </Grades>
            <Grades class="MTH 225" grade="C" status='card-warning' />
            <Grades class="CIS 163" grade="B-" status='card-success' />
            <Grades class="BIO 120" grade="A" status='card-success' />
          </InfoCard>
          <InfoCard cardTitle="Schedule" semester="Fall 2017">
          </InfoCard>
        </div>

        <div className="col-6 info box-shadow">
          <Typography className="text-center" type="headline">
            <Feed />
          </Typography>
        </div>

        <div className="col-3 user">
          <img className="img-responsive box-shadow" src={require('../profile.jpg')}/>
          <InfoCard cardTitle="Hello, Stephanie" subheading="August 4, 2017">
            <div className="empty-card">
              <h3 className="text-center muted">
                No New Notifications.
              </h3>
            </div>
          </InfoCard>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
