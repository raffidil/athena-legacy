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
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  Chip,
  ChipContact
} from 'react-mdl';
import Chart from 'react-highcharts';
import db from 'localforage';
import Layout from '../../components/Layout';
import ResultDialog from '../../components/ResultDialog';
import s from './styles.css';
import Link from '../../components/Link';
import AnswerCard from '../../components/AnswerCard';
import history from '../history';
import teams from '../teams';
import athena from './athena.png';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scores: [], isVisible: false };
  }
  componentWillMount() {
    this.updateScores();
  }
  componentDidMount() {
    document.title = 'Results';
    setInterval(this.addCounter, 1000);
  }
  gotoHome() {
    history.push({ pathname: '/' });
  }
  gotoAbout() {
    history.push({ pathname: '/about' });
  }
  updateScores = () => {
    db.getItem('scores').then((scores) => {
      if (scores != null) {
        this.setState({ scores });
      }
    });
  }

  render() {
    return (
      <Layout className={s.content}>

        <h1 className={s.fontstyle1} style={{
          marginTop: '25px'
        }}>

        </h1>
       {teams.map(team => (
         <Grid key={team.id} className="demo-grid-1" style={{marginTop: '-10px'}}>
           <Cell col={2} style={{marginTop: '-5px'}}>
             <Card shadow={0} style={{
               width: '215px',
               minHeight: '35px',
               backgroundColor: team.color,
               marginLeft: '20px',
               }}>
               <CardTitle expand
                 style={{
                   fontSize: '30px',
                   color: '#212121',
                   padding: '5px',
                   margin: 'auto',
                 }}>
                 <div style={{fontFamily: 'ArTarumianMatenagir', fontSize: '32px'}}>{team.name}</div>
                 </CardTitle>
             </Card>
           </Cell>
           <Cell col={1} style={{marginTop: '-5px',marginLeft: '65px'}}>
             <Card shadow={2} style={{
               width: (this.state.scores[team.id] || 0)*6.7,
               minHeight: '20px',
               backgroundColor: team.backColor,
               marginLeft: '20px'
               }}>
               <CardTitle expand style={{fontSize: '30px',color: 'white',padding: '5px',margin: 'auto',marginLeft: '5px'}}>{this.state.scores[team.id]}</CardTitle>
             </Card>
           </Cell>
         </Grid>
          ))}
          <Grid className="demo-grid-1" style={{marginTop: '10px', marginLeft: 20}}>
            <Cell col={1} style={{marginTop: -30}}>
              <img src={athena} style={{width: '250%',display: 'block',margin: 'auto',marginTop: '0px'}}/>
            </Cell>
            <Cell col={3} offset={2} style={{fontFamily: "Roboto"}} >
              <div style={{color: "#575756" ,fontSize: 60,marginLeft: -70, marginTop: 10}}>Athena</div>
              <div style={{color: "#575756" ,fontSize: 25,marginLeft: -70, marginTop: 12}}>Intellectual Game</div>
              <div style={{ width: 200, height: 2,backgroundColor: "#575756",marginLeft: -70, marginTop: 10}}/>
              <div style={{fontSize: 20,marginLeft: -70, marginTop: 10}}>created by Raffi Dilanchian</div>
              <div style={{fontSize: 20,marginLeft: -70, marginTop: 5}}>github.com/raffidil</div>
            </Cell>
            <Cell col={1} offset={1}><div style={{display: this.state.isVisible ? "flex" : "none"}}>shnorhakalutioon</div></Cell>
            <Cell col={1} offset={3} style={{marginTop: 110}}>
              <IconButton name="info_outline" colored style={{color: '#575756'}} onClick={() => this.setState({ isVisible: !this.state.isVisible }) }/>
            </Cell>

          </Grid>
      </Layout>
    );
  }

}
