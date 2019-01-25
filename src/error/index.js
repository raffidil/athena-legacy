import React from 'react';
import {
  IconButton,
  List,
  ListItem,
  Grid,
  Icon,
  FABButton,
  Cell,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from 'react-mdl';
import history from '../history';
import text from '../../text';
import s from './styles.css';

class ErrorPage extends React.Component {

  static propTypes = {
    error: React.PropTypes.object,  // eslint-disable-line react/forbid-prop-types
  };

  componentDidMount() {
    document.title = this.props.error && this.props.error.status === 404 ?
      text.pageNotFound : text.error;
  }

  goBack = (event) => {
    event.preventDefault();
    history.goBack();
  };

  goHome = () => {
    history.push({ pathname: '/' }); // go to page function
  }

  render() {
    if (this.props.error) console.error(this.props.error); // eslint-disable-line no-console

    const [code, title] = this.props.error && this.props.error.status === 404 ?
      ['404', text.pageNotFound] :
      [text.error, text.somethingWentWrong];

    return (
      <div className={s.container}>
        <main className={s.content}>
          <h1 className={s.code}>
            <p><Icon style={{ fontSize: '300px', color: '#E57373' }} name="error_outline" /></p>
            <p style={{ fontSize: '100px', color: '#E57373', fontVariantCaps: 'all-petite-caps' }}>{text.error}</p>
            <p style={{ fontSize: '30px', color: '#B0BEC5', marginTop: '37px' }}>{text.somethingWentWrong}</p>
          </h1>
          <br /><br />
          <p className={s.text}>
            <IconButton onClick={this.goHome} ripple style={{ fontSize: '45px', color: '#546E7A' }} name="arrow_back" />
            <IconButton onClick={this.goHome} ripple style={{ fontSize: '45px', color: '#546E7A' }} name="home" />
          </p>
        </main>
      </div>
    );
  }

}

export default ErrorPage;
