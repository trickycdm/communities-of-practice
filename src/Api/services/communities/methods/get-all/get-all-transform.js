export const transformCommunityArray = (communitiesArray) => {
  return communitiesArray.reduce((acc, community) => {
    acc[community.slug] = community;
    return acc;
  }, {});
};
