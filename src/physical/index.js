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
  Textfield,
} from 'react-mdl';
import Layout from '../../components/Layout';
import db from 'localforage';
import s from './styles.css';
import QSquare from '../../components/QSquare';
import Link from '../../components/Link';
import history from '../history';
import QButton from '../../components/QButton';
import Timer from '../../components/Timer';


class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = { seen: [],wordsSeen: [] };
  }

  componentWillMount() {
    document.body.style.backgroundColor = '#ffffff';
  }
  componentDidMount() {
    document.title = 'Ֆիզիկական';
    db.getItem('physical').then((state) => {
      this.setState(state);
    }).catch((err) => {
      console.log(err);
    })
    db.getItem('words').then((state) => {
      this.setState(state);
    }).catch((err) => {
      console.log(err);
    })
  }
  gotoCategories() {
    history.push({pathname: '/categories'}); // go to page function
  }
  gotoPhys() {
    history.push({pathname: '/phys'}); // go to page function
  }

  makeSeen = (number) => {
    const seen = this.state.seen;
    seen[number] = true;
    this.setState({ seen });

    db.setItem('physical', this.state)
    .catch((err) => {
      console.log(err);
    });
  }

  wordsMakeSeen = (number) => {
    const seen = this.state.wordsSeen;
    seen[number] = true;
    this.setState({ seen });

    db.setItem('words', this.state)
    .catch((err) => {
      console.log(err);
    });
  }


  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
          marginTop: '-30px'
        }}><Grid className="demo-grid-1">
          <Cell col={1}>
            <IconButton style={{color: '#263238'}} name="arrow_back" colored onClick={this.gotoCategories}/>
          </Cell>
            </Grid>
       </h1>
        <div style={{
          width: '100%',
          marginLeft: '30px',
          fontSize: '30px'
        }}>
        <Grid className="demo-grid-1" style={{marginTop: -50}}>
          <Cell col={4}>
            <QSquare itemtext="1" backitemtext="a" onClick={() => this.makeSeen(1)} seen={this.state.seen[1]}/>
          </Cell>
          <Cell col={4}>
            <QSquare itemtext="2" backitemtext="b" onClick={() => this.makeSeen(2)} seen={this.state.seen[2]}/>
          </Cell>
          <Cell col={4}>
            <QSquare itemtext="3" backitemtext="c" onClick={() => this.makeSeen(3)} seen={this.state.seen[3]}/>
          </Cell>
        </Grid>
        <Grid className="demo-grid-1">
          <Cell col={4}>
            <QSquare itemtext="4" backitemtext="d" onClick={() => this.makeSeen(4)} seen={this.state.seen[4]}/>
          </Cell>
          <Cell col={4}>
            <QSquare itemtext="5" backitemtext="e" onClick={() => this.makeSeen(5)} seen={this.state.seen[5]}/>
          </Cell>
          <Cell col={4}>
            <QSquare itemtext="6" backitemtext="f" onClick={() => this.makeSeen(6)} seen={this.state.seen[6]}/>
          </Cell>
        </Grid>
        <Grid className="demo-grid-1">
          <Cell col={4}>
            <QSquare itemtext="7" backitemtext="g" onClick={() => this.makeSeen(7)} seen={this.state.seen[7]}/>
          </Cell>
          <Cell col={4}>
            <QSquare itemtext="8" backitemtext="h" onClick={() => this.makeSeen(8)} seen={this.state.seen[8]}/>
          </Cell>
          <Cell col={4}>
            <QSquare itemtext="9" backitemtext="i" onClick={() => this.makeSeen(9)} seen={this.state.seen[9]}/>
          </Cell>
        </Grid>
        <Grid className="demo-grid-1">
          <Cell col={4}>
            <QSquare itemtext="10" backitemtext="j" onClick={() => this.makeSeen(10)} seen={this.state.seen[10]}/>
          </Cell>
          <Cell col={4}>
            <QSquare itemtext="11" backitemtext="k" onClick={() => this.makeSeen(11)} seen={this.state.seen[11]}/>
          </Cell>
          <Cell col={4}>
            <QSquare itemtext="12" backitemtext="l" onClick={() => this.makeSeen(12)} seen={this.state.seen[12]}/>
          </Cell>
        </Grid>
        </div>

        <Grid className="demo-grid-1">
          <Cell col={1}>
              <QButton text="A" onClick={() => this.wordsMakeSeen(1)} goto="/words/1" seen={this.state.wordsSeen[1]}/>
          </Cell>
          <Cell col={1}>
              <QButton text="B" onClick={() => this.wordsMakeSeen(2)} goto="/words/2" seen={this.state.wordsSeen[2]}/>
          </Cell>
          <Cell col={1}>
              <QButton text="C" onClick={() => this.wordsMakeSeen(3)} goto="/words/3" seen={this.state.wordsSeen[3]}/>
          </Cell>
          <Cell col={1}>
              <QButton text="D" onClick={() => this.wordsMakeSeen(4)} goto="/words/4" seen={this.state.wordsSeen[4]}/>
          </Cell>

          <Cell col={1} offset={2}>
            <FABButton
              raised name="menu"
              style={{ backgroundColor: '#546E7A',display: 'block',margin: 'auto',color: '#fff'}}
              onClick={this.gotoPhys}
              ripple><Icon name="timer" />
          </FABButton>
        </Cell>
        </Grid>


      </Layout>
    );
  }

}
export default AboutPage;
