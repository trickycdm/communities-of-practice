export const transformCommunityArray = (communitiesArray) => {
  return communitiesArray.reduce((acc, community) => {
    community.subscribers = community.users ? community.users.length : 0
    acc[community.slug] = community;
    return acc;
  }, {});
};
