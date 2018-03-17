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
  ProgressBar,
  IconToggle,
  Tooltip
} from 'react-mdl';
import db from 'localforage';
import Layout from '../../components/Layout';
import s from './styles.css';
import Link from '../../components/Link';
import history from '../history';
import QButton from '../../components/QButton';

class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = { seen: [] };
  }

  componentDidMount() {
    document.title = 'Նկարներ';
    db.getItem('images').then((state) => {
      this.setState(state);
    }).catch((err) => {
      console.log(err);
    })
  }
  gotoCategories() {
    history.push({ pathname: '/categories'}); // go to page function
  }
  makeSeen = (number) => {
    const seen = this.state.seen;
    seen[number] = true;
    this.setState({ seen });

    db.setItem('images', this.state)
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
          marginTop: '20px'
        }}><Grid className="demo-grid-1" >
          <Cell col={1}>
            <IconButton style={{color: '#263238'}} name="arrow_back" colored onClick={this.gotoCategories}/>
          </Cell>
          <Cell col={1}>Նկարներ</Cell>
            </Grid>
       </h1>
        <div style={{
          width: '100%',
          fontSize: '30px',
          marginLeft: '100px',
        }}>
        <Grid className="demo-grid-1" style={{
          marginTop: '10px'
        }}>
          <Cell col={2}>
            <QButton text="1" onClick={() => this.makeSeen(1)} goto="/images/0" seen={this.state.seen[1]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="2" onClick={() => this.makeSeen(2)} goto="/images/1" seen={this.state.seen[2]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="3" onClick={() => this.makeSeen(3)} goto="/images/2" seen={this.state.seen[3]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="4" onClick={() => this.makeSeen(4)} goto="/images/3" seen={this.state.seen[4]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="5" onClick={() => this.makeSeen(5)} goto="/images/4" seen={this.state.seen[5]}/>
          </Cell>
        </Grid>
        <Grid className="demo-grid-1" style={{
          marginTop: '25px'
        }}>
        <Cell col={2}>
            <QButton text="6" onClick={() => this.makeSeen(6)} goto="/images/5" seen={this.state.seen[6]}/>
        </Cell>
          <Cell col={2}>
            <QButton text="7" onClick={() => this.makeSeen(7)} goto="/images/6" seen={this.state.seen[7]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="8" onClick={() => this.makeSeen(8)} goto="/images/7" seen={this.state.seen[8]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="9" onClick={() => this.makeSeen(9)} goto="/images/8" seen={this.state.seen[9]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="10" onClick={() => this.makeSeen(10)} goto="/images/9" seen={this.state.seen[10]}/>
          </Cell></Grid>
          <Grid className="demo-grid-1" style={{
            marginTop: '25px'
          }}>
          <Cell col={2}>
            <QButton text="11" onClick={() => this.makeSeen(11)} goto="/images/10" seen={this.state.seen[11]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="12" onClick={() => this.makeSeen(12)} goto="/images/11" seen={this.state.seen[12]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="13" onClick={() => this.makeSeen(13)} goto="/images/12" seen={this.state.seen[13]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="14" onClick={() => this.makeSeen(14)} goto="/images/13" seen={this.state.seen[14]}/>
          </Cell>
          <Cell col={2}>
            <QButton text="15" onClick={() => this.makeSeen(15)} goto="/images/14" seen={this.state.seen[15]}/>
          </Cell>
              </Grid>

              <Grid className="demo-grid-1" style={{
                marginTop: '25px'
              }}>
              <Cell col={2}>
                <QButton text="16" onClick={() => this.makeSeen(16)} goto="/images/15" seen={this.state.seen[16]}/>
              </Cell>
              <Cell col={2}>
                <QButton text="17" onClick={() => this.makeSeen(17)} goto="/images/16" seen={this.state.seen[17]}/>
              </Cell>
              <Cell col={2}>
                <QButton text="18" onClick={() => this.makeSeen(18)} goto="/images/17" seen={this.state.seen[18]}/>
              </Cell>
              <Cell col={2}>
                <QButton text="19" onClick={() => this.makeSeen(19)} goto="/images/18" seen={this.state.seen[19]}/>
              </Cell>
              <Cell col={2}>
                <QButton text="20" onClick={() => this.makeSeen(20)} goto="/images/19" seen={this.state.seen[20]}/>
              </Cell>
                  </Grid>
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
