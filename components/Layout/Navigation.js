import React from 'react';
import history from '../../src/history';
import Link from '../Link';
import { IconButton, MenuItem, Menu, Tooltip } from 'react-mdl';
import text from '../../text';
import click from './click.mp3';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }
  gotoResult() {
    const audio = new Audio(click);
    history.push({ pathname: '/result' });
    audio.play();
  }
  gotoSetting() {
    history.push({ pathname: '/setting' });
  }
  gotoHome() {
    history.push({ pathname: '/' });
  }
  gotoCategories() {
    history.push({ pathname: '/categories' });
  }


  render() {
    return (
      <nav className="mdl-navigation" ref={node => (this.root = node)}>
        <Tooltip label={text.home} position="bottom">
          <IconButton onClick={this.gotoHome} name="home" /></Tooltip>
        <Tooltip label={text.categories} position="bottom">
          <IconButton onClick={this.gotoCategories} name="apps" /></Tooltip>
        <Tooltip label={text.results} position="bottom">
          <IconButton onClick={this.gotoResult} name="insert_chart" /></Tooltip>
        <Tooltip label={text.setting} position="bottom">
          <IconButton onClick={this.gotoSetting} name="settings" /></Tooltip>
        <div style={{ position: 'relative' }}>
          {/* <IconButton name="more_vert" id="demo-menu-lower-right" />
          <Menu target="demo-menu-lower-right" align="right" ripple>
            <MenuItem><Link style={{ color: '#000' }}className="mdl-navigation__link" to="/science">Science</Link></MenuItem>
            <MenuItem><Link style={{ color: '#000' }}className="mdl-navigation__link" to="/images">Images</Link></MenuItem>
            <MenuItem><Link style={{ color: '#000' }}className="mdl-navigation__link" to="/musics">Musics</Link></MenuItem>
            <MenuItem><Link style={{ color: '#000' }}className="mdl-navigation__link" to="/physical">Activities</Link></MenuItem>
          </Menu> */}
        </div>
      </nav>
    );
  }

}

export default Navigation;
