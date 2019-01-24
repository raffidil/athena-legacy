/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';
import logo from './mainlogo.png';
import text from '../../text.js';


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
          <Link style={{ marginRight: '75px', fontSize: 28 }} className={`mdl-layout-title ${s.title}`} to="/">
            {text.title}
          </Link>
          <div className="mdl-layout-spacer" />
          <Navigation />
        </div>
      </header>
    );
  }

}

export default Header;
