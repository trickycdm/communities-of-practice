import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddCommunityForm } from 'Components/AddCommunityForm/AddCommunityForm';

class AddCommunity extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='communities-container'>
        <AddCommunityForm />
      </div>
    );
  }
}

// gives our component access to state through props.emailManagement
function mapStateToProps(state) {
  return {
    communities: state.communities
  };
}

const AddCommunityView = connect(
  mapStateToProps
)(AddCommunity);

export { AddCommunityView };
