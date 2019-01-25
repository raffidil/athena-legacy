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
import text from '../../text';
import history from '../history';
import ReactDOM from 'react-dom';


class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = { seen: [] };
  }

  componentDidMount() {
    document.title = text.science;
    db.getItem('science').then((state) => {
      this.setState(state);
    }).catch((err) => {
      console.log(err);
    });
  }
  gotoCategories = () => {
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
            <IconButton style={{ color: '#263238' }} name="arrow_back" colored onClick={this.gotoCategories} />
          </Cell>
          <Cell col={7} style={{ color: '#263238' }}>{text.sciences}</Cell>
        </Grid>
        </h1>
        <div
          style={{
            width: '80%',
            gridTemplateColumns: 'repeat(5, auto)',
            gridGap: '50px',
            display: 'grid',
            margin: 'auto',
          }}
        >
          {Array(25).fill(undefined).map((_, i) => <QButton text={i + 1} onClick={() => this.makeSeen(i + 1)} goto={`/science/${i}`} seen={this.state.seen[i + 1]} />)}
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
