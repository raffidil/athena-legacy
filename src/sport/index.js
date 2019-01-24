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

class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = { seen: [] };
  }

  componentDidMount() {
    document.title = 'Math';
    db.getItem('sport').then((state) => {
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

    db.setItem('sport', this.state)
    .catch((err) => {
      console.log(err);
    });
  }

  gotoCategories() {
    history.push({ pathname: '/categories' }); // go to page function
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
          <Cell col={7} style={{ color: '#263238' }}>ریاضی</Cell>
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
            <QButton text="1" onClick={() => this.makeSeen(1)} goto="/sport/0" seen={this.state.seen[1]} />
            <QButton text="2" onClick={() => this.makeSeen(2)} goto="/sport/1" seen={this.state.seen[2]} />
            <QButton text="3" onClick={() => this.makeSeen(3)} goto="/sport/2" seen={this.state.seen[3]} />
          </div>
          <div
            style={{ display: 'flex',
              width: '55%' }}
          >
            <QButton text="4" onClick={() => this.makeSeen(4)} goto="/sport/3" seen={this.state.seen[4]} />
            <QButton text="5" onClick={() => this.makeSeen(5)} goto="/sport/4" seen={this.state.seen[5]} />
            <QButton text="6" onClick={() => this.makeSeen(6)} goto="/sport/5" seen={this.state.seen[6]} />
          </div>
          <div
            style={{ display: 'flex',
              width: '55%' }}
          >
            <QButton text="7" onClick={() => this.makeSeen(7)} goto="/sport/6" seen={this.state.seen[7]} />
            <QButton text="8" onClick={() => this.makeSeen(8)} goto="/sport/7" seen={this.state.seen[8]} />
            <QButton text="9" onClick={() => this.makeSeen(9)} goto="/sport/8" seen={this.state.seen[9]} />
          </div>
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
