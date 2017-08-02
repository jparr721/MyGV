import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

const styles = createStyleSheet(theme => ({
  modalStyle: {
    backgroundColor: '#2196F3',
  },
}));

class Modal extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const classes = this.props.classes;
    return (
      <div>
        <Button onClick={() => this.setState({ open: true })}>{this.props.buttonTitle}</Button>
        <Dialog open={this.state.open} transition={Slide} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            {this.props.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.subText}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="accent">
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Modal);
