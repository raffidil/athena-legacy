import React, { PropTypes } from 'react';
import cx from 'classnames';
import Link from '../Link';
import {
  Button,
  CardText,
  Card,
  CardTitle,
  CardMenu,
  CardActions,
  IconButton,
  Grid,
  Icon,
  FABButton,
  Cell,
  ProgressBar,
  IconToggle,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from 'react-mdl';
import history from '../../src/history';


class QButton extends React.Component {
  click = () => {
    this.props.onClick();
  }
  render() {
    let color = '#37474F';
    let text = this.props.itemtext;
    if (this.props.seen) {
      if (this.props.isWord){
        color = '#8BC34A';
      } else {
        color = '#0097A7';
      }
      text = this.props.backitemtext;
    }

    return (
      <Button onClick={this.click} raised ripple colored style={{ backgroundColor: color, fontSize: '30px', color: '#fff', width: '250px', height: this.props.isWord ? '50px' : '90px', ...this.props.style}}>
        {text}
      </Button>
    )
  }

}

export default QButton;
