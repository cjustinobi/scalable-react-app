/**
*
* AppBar
*
*/

import React from 'react';
import { Link } from 'react-router';
import IconButton from '../IconButton';
import styles from './styles.css';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login"> login </Link>);

  return (
    <div className={styles.appBar}>
      <div className={styles.iconButton}>
        <IconButton
          icon="bars"
          onClick={toggleDrawer}
          iconClass={styles.icon}
          buttonClass={styles.iconButton}
        />
      </div>
      <div className={styles.heading}>Coder daily</div>
      <div className={styles.linkContainer}>{ loginLink }</div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  email: React.PropTypes.string,
};

export default AppBar;
