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
import Timer from '../../components/Timer';


class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = { seen: [] };
  }

  componentWillMount() {
    document.body.style.backgroundColor = '#AA0000';
  }
  componentDidMount() {
    document.title = 'Ֆիզիկական';
    db.getItem('physical').then((state) => {
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


  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
          marginTop: '20px'
        }}><Grid className="demo-grid-1">
          <Cell col={1}>
            <IconButton style={{color: '#310035'}} name="arrow_back" colored onClick={this.gotoCategories}/>
          </Cell>
            </Grid>
       </h1>
        <div style={{
          width: '100%',
          marginLeft: '30px',
          fontSize: '30px'
        }}>
        <Grid className="demo-grid-1">
          <Cell offset={2} col={4}>
            <QSquare itemtext="1" backitemtext="Ճակատագիր" onClick={() => this.makeSeen(1)} seen={this.state.seen[1]}/>
          </Cell>
          <Cell col={1}>
            <QSquare itemtext="2" backitemtext="Միապաղաղ Մեղեդի" onClick={() => this.makeSeen(2)} seen={this.state.seen[2]}/>
          </Cell>
          </Grid>
          <Grid className="demo-grid-1">
            <Cell offset={2} col={4}>
              <QSquare itemtext="3" backitemtext="Միապաղաղ Մեղեդի" onClick={() => this.makeSeen(3)} seen={this.state.seen[3]}/>
            </Cell>
            <Cell col={1}>
              <QSquare itemtext="4" backitemtext="Գուշակիր Բառը" onClick={() => this.makeSeen(4)} seen={this.state.seen[4]}/>
            </Cell>
            </Grid>
            <Grid className="demo-grid-1">
              <Cell offset={2} col={4}>
                <QSquare itemtext="5" backitemtext="Գուշակիր Բառը" onClick={() => this.makeSeen(5)} seen={this.state.seen[5]}/>
              </Cell>
              <Cell col={1}>
                <QSquare itemtext="6" backitemtext="Ճակատագիր" onClick={() => this.makeSeen(6)} seen={this.state.seen[6]}/>
              </Cell>
              </Grid>
        </div>
        <FABButton
          raised name="menu"
          style={{ backgroundColor: '#C2185B',display: 'block',margin: 'auto',marginTop: '20px',color: '#fff'}}
          onClick={this.gotoPhys}
          ripple><Icon name="timer" /></FABButton>

      </Layout>
    );
  }

}
export default AboutPage;
