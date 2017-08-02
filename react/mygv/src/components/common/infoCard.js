import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = createStyleSheet(theme => ({
  container: {
    marginBottom: 20,
  },
  card: {

    // minWidth: 275,
    // minHeight: '20vh',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.contrast,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.primary
  },
}));

class InfoCard extends Component{
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="headline">
              <h2>{this.props.cardTitle}</h2>
            </Typography>
            <Typography type="body1">
              <h4>{this.props.subheading}</h4>
            </Typography>
            {this.props.children}
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default withStyles(styles)(InfoCard);
