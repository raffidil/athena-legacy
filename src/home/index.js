  import React from 'react';
  import {
  Button,
  CardText,
  Card,
  CardTitle,
  CardMenu,
  CardActions,
  IconButton,
  Grid,
  Cell,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from 'react-mdl';
  import db from 'localforage';
  import Layout from '../../components/Layout';
  import s from './styles.css';
  import homepic from './home.svg';
  import Link from '../../components/Link';
  import history from '../history';
  import text from '../../text';

  class AboutPage extends React.Component {

    componentDidMount() {
      document.title = 'Home';
    }

    gotoCategories() {
      history.push({ pathname: '/categories' });
    }

    playSong = () => {
      const audio = new Audio(backSong);
      audio.play();
    }

    render() {
      return (
        <Layout className={s.content}>
          <div
            style={{
              width: '100%',
              margin: 'auto',
              marginTop: '-10px',
            }}
          >
            <img src={homepic} style={{ width: '55%', display: 'block', margin: 'auto', marginTop: '0px' }} />
            <div style={{ fontSize: 30, flexDirection: 'column', textAlign: 'center', color: '#37474F', fontFamily: 'ArTarumianMatenagir' }}>{text.homeTitle}</div>
            <Button
              primary
              style={{ color: '#263238', display: 'block', margin: 'auto', marginTop: '20px', height: 70, width: 200, fontSize: 35 }}
              onClick={this.gotoCategories}
              ripple
            >{text.start}</Button>
          </div>
        </Layout>
      );
    }

}

  export default AboutPage;
