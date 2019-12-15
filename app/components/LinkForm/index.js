/**
*
* LinkForm
*
*/

import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import TextInput from '../TextInput';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    errorText: '',
  };

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div
            className={styles.heading}
          >
            Add a link
          </div>

          <TextInput
            placeholder="URL"
            className={styles.input}
            errorText={this.state.urlError}
            ref={(f) => (this.url = f)}
          />

          <TextInput
            placeholder="Description"
            className={styles.input}
            errorText={this.state.descriptionError}
            ref={(f) => (this.description = f)}
          />


          <div
            className={styles.actionContainer}
          >
            <div
              className={styles.button}
              onClick={this.props.cancelLogin}
            >
              cancel
            </div>
            <div
              className={styles.button}
              onClick={this.login}
            >
              log in
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
