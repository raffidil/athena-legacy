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
import homepic from './logo.png';
import Link from '../../components/Link';
import history from '../history';

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
        <div style={{
          width: '100%',
          margin: 'auto',
          marginTop: '10px'
        }}>
                  <img src={homepic} style={{width: '35%',display: 'block',margin: 'auto',marginTop: '0px'}}/>
                  <div style={{position: 'absolute', top: 450, left: 475, fontSize: 20}}>30-րդ Գարնանային խաղեր</div>
                  <Button
                    raised
                    accent
                    style={{ backgroundColor: '#00838F',display: 'block',margin: 'auto',marginTop: '20px',height: 80, width:200 ,fontSize: 35}}
                    onClick={this.gotoCategories}
                    ripple>Start</Button>

               {/*<Card shadow={5} style={{
                width: '600px',
                margin: 'auto',
              }}>
                <CardTitle style={{
                  color: '#fff',
                  height: '400px',
                  background: `url(${homepic}) center / cover`,
                  backgroundColor: '#a8629c'
                }}/>
                <CardActions border>
                  <Button
                    colored style={{
                      fontSize: 20
                    }} onClick={this.gotoCategories}
                  >
                  start
                </Button>
                </CardActions>
              </Card>*/}
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
