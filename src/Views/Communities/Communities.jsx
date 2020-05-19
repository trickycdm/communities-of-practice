import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Container from '@material-ui/core/Container';
import { CommunitiesGrid } from 'Components/CommunitiesGrid/CommunitiesGrid';
import { handleGetAllCommunitiesApiCall } from 'Redux/communities';

const CommunitiesView = () => {
  const dispatch = useDispatch();
  const { communities } = useSelector(state => (state), shallowEqual);
  if (Object.keys(communities).length === 0) dispatch(handleGetAllCommunitiesApiCall());
  return (
    <Container maxWidth="md">
      <CommunitiesGrid communities={communities} />
    </Container>
  );
};

export { CommunitiesView };
