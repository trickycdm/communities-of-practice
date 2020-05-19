import React, { Component } from 'react';
import { NewUserForm } from 'Components/NewUserForm/NewUserForm';

class NewUserView extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <NewUserForm />
      </>
    );
  }
}

export { NewUserView };
