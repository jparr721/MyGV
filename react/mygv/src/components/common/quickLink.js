import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    // marginTop: 30,
    marginBottom: 20,
  },
  paper: {
    padding: 16,
  },
}));

const QuickLink = (props) => {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Grid container gutter={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{props.children}</Paper>
        </Grid>
      </Grid>
    </div> 
  );
}

QuickLink.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(QuickLink);
