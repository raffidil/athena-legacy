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
import mane from './mane.mp3';
import holo from './holo.mp3';
import back from './back.mp3';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.body.style.backgroundColor = '#AA0000';
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
          marginTop: '-3px'
        }}><Grid className="demo-grid-1" style={{
          marginTop: '20px'
        }}>
          <Cell col={1}>
            <IconButton name="arrow_back" style={{ color: '#263238'}}colored onClick={this.gotoPhysical}/>
          </Cell>
            </Grid>
       </h1>
        <div style={{ marginLeft: '299px', marginTop: '-65px' }}>
          <BigTimer timeout={90}/>
        </div>
      </Layout>
    );
  }

}
export default AboutPage;
