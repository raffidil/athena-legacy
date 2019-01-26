import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';
// import logo from './logo.png';
const logo = '';
import text from '../../text';


class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <header className={`mdl-layout__header ${s.header}`} ref={node => (this.root = node)}>
        <div className={`mdl-layout__header-row ${s.row}`}>
          <img className={s.logo} src={logo} alt="Smiley face" height="42" width="42" />
          <Link style={{ marginLeft: '75px', fontSize: 32 }} className={`mdl-layout-title ${s.title}`} to="/">
            {text.header}
          </Link>
          <div className="mdl-layout-spacer" />
          <Navigation />
        </div>
      </header>
    );
  }

}

export default Header;
