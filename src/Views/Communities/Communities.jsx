import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { CommunitiesGrid } from 'Components/CommunitiesGrid/CommunitiesGrid';

class Communities extends Component {
  render() {
    const { communities } = this.props;
    return (
      <Container maxWidth="md">
        <CommunitiesGrid communities={communities} />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    communities: state.communities,
  };
}

const CommunitiesView = connect(mapStateToProps)(Communities);

export { CommunitiesView };
