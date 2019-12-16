/**
*
* IconButton
*
*/

import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import FontAwesome from 'react-fontawesome';

function IconButton({ onClick, icon, iconClass, buttonClass }) {
  return (
    <div
      className={styles.iconButton, buttonClass}
      onClick={onClick}
    >
      <FontAwesome
        className={iconClass}
        name={icon}
      />
    </div>
  );
}

IconButton.propTypes = {
  icon: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  iconClass: React.PropTypes.string,
  buttonClass: React.PropTypes.string,
};

export default IconButton;
