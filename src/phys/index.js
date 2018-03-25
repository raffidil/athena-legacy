import React from 'react';
import {
  IconButton,
  Grid,
  Cell,
  Tooltip,
} from 'react-mdl';
import Layout from '../../components/Layout';
import s from './styles.css';
import history from '../history';
import BigTimer from '../../components/BigTimer';
import ReactAudioPlayer from 'react-audio-player';
import back1 from './back1.mp3';
import back2 from './back2.mp3';
import back3 from './back3.mp3';


class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.body.style.backgroundColor = '#ffffff';
  }
  componentDidMount() {
    document.title = 'Ֆիզիկական';
  }
  gotoPhysical = () => {
    history.push({ pathname: '/physical' });
  }


  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{
          marginTop: '-30px'
        }}><Grid className="demo-grid-1">
          <Cell col={1}>
            <IconButton name="arrow_back" style={{ color: '#263238'}}colored onClick={this.gotoPhysical}/>
          </Cell>
            </Grid>
       </h1>
        <div style={{ marginLeft: '299px', marginTop: '-65px' }}>
          <BigTimer timeout={90}/>
        </div>
        <Grid className="demo-grid-1">
        <Cell col={4}><ReactAudioPlayer src={back1} style={{marginLeft: 0}}/></Cell>
        <Cell col={4}><ReactAudioPlayer src={back2} style={{marginLeft: 0}}/></Cell>
        <Cell col={4}><ReactAudioPlayer src={back3} style={{marginLeft: 0}}/></Cell>
      </Grid>
      </Layout>
    );
  }

}
export default AboutPage;
