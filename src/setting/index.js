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
import db from 'localforage';
import Layout from '../../components/Layout';
import s from './styles.css';
import history from '../history';
import teams from '../teams';
import adara from './adara.mp3';
import pollux from './pollux.mp3';
import lists from '../words/lists';

export default class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.OpenDialog = this.OpenDialog.bind(this);
    this.CloseDialog = this.CloseDialog.bind(this);
  }

  componentDidMount() {
    document.title = 'Setting';
    setInterval(this.addCounter, 1000);
  }
  OpenDialog() {
    this.setState({
      openDialog: true
    });
  }
  CloseDialog() {
    this.setState({
      openDialog: false
    });
  }
  agreeClearDb = () => {
    this.clearDb();
    this.CloseDialog();
  }

  clearDb = () => {
    const audio = new Audio(adara);
    audio.play();
    db.setItem('science', {}).catch(console.log);
    db.setItem('images', {}).catch(console.log);
    db.setItem('musics', {}).catch(console.log);
    db.setItem('sport', {}).catch(console.log);
    db.setItem('physical', {}).catch(console.log);
    db.setItem('words', {}).catch(console.log);
    lists.forEach(list => db.setItem('wordCard'+list.id, {}).catch(console.log))

  }
  clearAllDb = () => {
    const audio = new Audio(pollux);
    audio.play();
    db.setItem('science', {}).catch(console.log);
    db.setItem('images', {}).catch(console.log);
    db.setItem('musics', {}).catch(console.log);
    db.setItem('sport', {}).catch(console.log);
    db.setItem('physical', {}).catch(console.log);
    db.setItem('words', {}).catch(console.log);
    db.setItem('wordCard', {}).catch(console.log);
    db.setItem('scores', {}).catch(console.log);
      lists.forEach(list => db.setItem('wordCard'+list.id, {}).catch(console.log))
    this.OpenDialog();
  }

  clearScoreDb = () => {
    const audio = new Audio(adara);
    audio.play();
    db.setItem('scores', {}).catch(console.log);
  }

  inc = (team) => {
    const audio = new Audio(adara);
    audio.play();
    db.getItem('scores').then((scores) => {
      scores[team.id] = (scores[team.id] || 0) + 5;
      db.setItem('scores', scores)
        .then(() => this.forceUpdate());
    }).catch(console.log);
  }

  dec = (team) => {
    const audio = new Audio(adara);
    audio.play();
    db.getItem('scores').then((scores) => {
      scores[team.id] = (scores[team.id] || 0) - 5;
      db.setItem('scores', scores)
        .then(() => this.forceUpdate());
    }).catch(console.log);
  }

  gotoHome() {
    history.push({pathname: '/'});
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{ marginTop: '10px' }}>
          <Grid className="demo-grid-2">
            <Cell col={1}>
              <IconButton style={{color: '#263238'}} name="home" colored onClick={this.gotoHome} />
            </Cell>
            <Cell col={1}>Setting</Cell>
          </Grid>
        </h1>
        <Grid className="demo-grid-2" style={{ marginTop: '-60px' }}>
          <Cell style={{margin: '-5px'}} col={6}>
            <List>
              <ListItem><span style={{ fontSize: '25px' }}>Score Manual Setting</span></ListItem>
              {teams.map(team => (
                <Card key={team.id} shadow={2} style={{ width: '300px', minHeight: '30px', margin: '-12px', marginLeft: '10px', marginTop: '15px' }}>
                 <ListItem style={{ marginTop: '-8px' }}>
                   <span style={{ marginRight: '20px' }}>
                     <IconButton name="remove" onClick={() => this.dec(team)} colored style={{ color: 'red' }} />

                     <IconButton name="add" onClick={() => this.inc(team)} colored mini style={{ color: '#388e3c', marginLeft: '5px' }} />
                   </span>
                   <span style={{ color: team.backColor, fontSize: '20px'}}>{team.name}</span>
                 </ListItem></Card>
               ))}
            </List>
          </Cell>
          <Cell col={6}>
            <List>
              <ListItem><span style={{ fontSize: '25px' }}>General Setting</span></ListItem>
              <ListItem>
                <span style={{ marginRight: '20px' }}>
                  <FABButton onClick={this.clearDb} colored style={{ color: '#37474f', backgroundColor: '#eceff1' }} mini>
                    <Icon name="delete_sweep" />
                  </FABButton>
                </span>
                Clear Question Arrangement
              </ListItem>
              <ListItem>
                <span style={{ marginRight: '20px' }}>
                  <FABButton onClick={this.clearScoreDb} colored style={{ color: '#37474f', backgroundColor: '#eceff1' }} mini>
                    <Icon name="delete_sweep" />
                  </FABButton>
                </span>
                Clear Score Arrangement
              </ListItem>
              <ListItem>
                <span style={{ marginRight: '20px' }}>
                  <FABButton onClick={this.clearAllDb} colored style={{ color: '#E53935', backgroundColor: '#eceff1' }} mini>
                    <Icon name="restore" />
                  </FABButton>
                </span>
                Restart the Game
              </ListItem>
            </List>
          </Cell>
        </Grid>
        <div>
      <Dialog open={this.state.openDialog}>
        <DialogTitle>Are You Sure Want To Restart the Game?</DialogTitle>
        <DialogContent>
          <p>If you prees AGREE all Question and Scores Arrangements will delete.</p>
          <p>prees CANCEL to close.</p>
        </DialogContent>
        <DialogActions>
          <Button type="button" onClick={this.agreeClearDb}>Agree</Button>
          <Button type="button" onClick={this.CloseDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
      </Layout>
    );
  }

}
