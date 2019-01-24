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
  Icon,
  FABButton,
  Cell,
} from 'react-mdl';
import db from 'localforage';
import QButton from '../../components/QButton';
import Layout from '../../components/Layout';
import s from './styles.css';
import Link from '../../components/Link';
import history from '../history';
import ReactDOM from 'react-dom';


class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = { seen: [] };
  }

  componentDidMount() {
    document.title = 'Գիտական';
    db.getItem('science').then((state) => {
      this.setState(state);
    }).catch((err) => {
      console.log(err);
    });
  }
  gotoCategories() {
    history.push({ pathname: '/categories' });
  }

  makeSeen = (number) => {
    const seen = this.state.seen;
    seen[number] = true;
    this.setState({ seen });

    db.setItem('science', this.state)
    .catch((err) => {
      console.log(err);
    });
  }


  render() {
    return (
      <Layout className={s.content}>
        <h1
          className={s.fontstyle1} style={{
            marginTop: '10px',
          }}
        ><Grid className="demo-grid-1">
          <Cell col={1}>
            <IconButton style={{ color: '#263238' }} name="arrow_forward" colored onClick={this.gotoCategories} />
          </Cell>
          <Cell col={7} style={{ color: '#263238' }}>علوم</Cell>
        </Grid>
        </h1>
        <div
          style={{
            width: '100%',
            marginLeft: '100px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '360px',
          }}
        >
          <div
            style={{ display: 'flex',
              width: '55%' }}
          >
            <QButton text="1" onClick={() => this.makeSeen(1)} goto="/science/0" seen={this.state.seen[1]} />
            <QButton text="2" onClick={() => this.makeSeen(2)} goto="/science/1" seen={this.state.seen[2]} />
          </div>
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
