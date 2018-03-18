import React from 'react';
import {
  IconButton,
  Grid,
  Cell,
  Tooltip,
} from 'react-mdl';
import Layout from '../../components/Layout';
import db from 'localforage';
import s from './styles.css';
import history from '../history';
import BigTimer from '../../components/BigTimer';
import ReactAudioPlayer from 'react-audio-player';
import lists from './lists';
import QSquare from '../../components/QSquare';

class WordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seen: []};
  }

  componentWillMount() {
    document.body.style.backgroundColor = '#AA0000';
    const id = parseInt(this.props.route.params.id, 10)-1;
    this.list = lists[id];

    db.getItem('wordCard'+this.list.id).then((state) => {
      this.setState(state);
    }).catch((err) => {
      console.log(err);
    })
  }

  componentDidMount() {
    document.title = 'Words';
  }

  gotoPhysical = () => {
    history.push({ pathname: '/physical' });
  }

  makeSeen = (number) => {
    const seen = this.state.seen;
    seen[number] = true;
    this.setState({ seen });

    db.setItem('wordCard'+this.list.id, this.state)
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
          marginTop: '-3px'
        }}><Grid className="demo-grid-1" style={{
          marginTop: '20px'
        }}>
          <Cell col={1}>
            <IconButton name="arrow_back" style={{ color: '#263238'}}colored onClick={this.gotoPhysical}/>
          </Cell>
            </Grid>
       </h1>
       <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
       {this.list && this.list.list.map((text , index)=> (
         <QSquare isWord itemtext={text.text} backitemtext={text.text} key={index} onClick={() => this.makeSeen(index)} seen={this.state.seen[index]} style={{marginTop: '10px'}}/>
       ))}
     </div>

      </Layout>
    );
  }

}
export default WordPage;