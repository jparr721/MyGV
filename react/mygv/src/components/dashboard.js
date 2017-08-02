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
import Modal from '../components/common/modal';
import SimpleListItem from './common/simpleListItem';
import QuickLink from './common/quickLink';
import Grid from 'material-ui/Grid';

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
    const subText = (
      <div>
        <h5>Grand Valley offers tutoring free of charge to students who need help in their classes,
        you can check it out <a href="http://www.gvsu.edu/tc/" target="_blank">here.</a></h5>
      </div>
    )
    return (
      <div id="dashboard" className="row">
        <div className="col-3 cards">
          <InfoCard cardTitle="Grades" subheading="Fall 2017">
            <Grades class="CIS 163" grade="B+" status='card-success' />
            <Grades class="MTH 202" grade="D" status='card-danger'>
              <Modal buttonTitle="Having trouble in ths course?" title="Need some help?"
                subText={subText}/>
            </Grades>
            <Grades class="MTH 225" grade="C" status='card-warning' />
            <Grades class="ANT 315" grade="B-" status='card-success' />
            <Grades class="BIO 120" grade="A" status='card-success' />
          </InfoCard>
          <InfoCard cardTitle="Schedule" subheading="Fall 2017">
            <SimpleListItem text="CIS 163" subtext="MON/WED/FRI 10-11:50" />
            <SimpleListItem text="MTH 202" subtext="MON/WED 11-1:50" />
            <SimpleListItem text="MTH 225" subtext="TUE/THU 8-8:50" />
            <SimpleListItem text="ANT 315" subtext="MON/WED/FRI 9-9:50" />
            <SimpleListItem text="BIO 120" subtext="TUE/THU 10-11:50" />
          </InfoCard>
        </div>

        <div className="col-5 info box-shadow text-center center-panel">
          <QuickLink>
            <InfoCard cardTitle="Campus Resources" />
            <div className="row">
              <div className="col-4 resources">
                <a href="http://www.gvsu.edu/maps.htm" target="_blank"><h4>Campus Map</h4></a>
                <i className="fa fa-map-marker fa-5x" aria-hidden="true"></i>
              </div>
              <div className="col-4 resources">
                <h4>GVSU Email</h4>
                <i className="fa fa-envelope fa-5x" aria-hidden="true"></i>
              </div>
              <div className="col-4 resources">
                <h4>Library Info</h4>
                <i className="fa fa-map-marker fa-5x" aria-hidden="true"></i>
              </div>
            </div>
          </QuickLink>
          <QuickLink>
            <InfoCard cardTitle="Academic Resources" />
            <div className="row">
              <div className="col-6 resources">
                <h4>Grades</h4>
                <i className="fa fa-graduation-cap fa-5x" aria-hidden="true"></i>
              </div>
              <div className="col-6 resources">
                <h4>Schedule</h4>
                <i className="fa fa-list-alt fa-5x" aria-hidden="true"></i>
              </div>
            </div>
          </QuickLink>
          <QuickLink>
            <InfoCard cardTitle="Account Resources"></InfoCard>
            <div className="row">
              <div className="col-4 resources">
                <h4>Balance</h4>
                <i className="fa fa-money fa-5x" aria-hidden="true"></i>
              </div>
              <div className="col-4 resources">
                <h4>Transactions</h4>
                <i className="fa fa-exchange fa-5x" aria-hidden="true"></i>
              </div>
              <div className="col-4 resources">
                <h4>Holds</h4>
                <i className="fa fa-hand-paper-o fa-5x" aria-hidden="true"></i>
              </div>
            </div>
          </QuickLink>
        </div>

        <div className="col-4 user">
          <img className="img-responsive box-shadow" src={require('../profile.jpg')}/>
          <InfoCard cardTitle="Hello, Stephanie" subheading="August 4, 2017">
            <div className="empty-card">
              <h3 className="text-center muted">
                No New Notifications.
              </h3>
            </div>
          </InfoCard>
          <InfoCard cardTitle="Recent Tweets">
            <Feed />
          </InfoCard>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
