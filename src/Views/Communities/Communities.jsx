import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Container from '@material-ui/core/Container';
import { CommunitiesGrid } from 'Components/CommunitiesGrid/CommunitiesGrid';

const CommunitiesView = () => {
  const { communities } = useSelector(state => (state), shallowEqual);
  return (
    <Container maxWidth="md">
      <CommunitiesGrid communities={communities} />
    </Container>
  );
};

export { CommunitiesView };
