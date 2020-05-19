export const transformCommunityArray = (communitiesArray) => {
  return communitiesArray.reduce((acc, cur) => {
    acc[cur.slug] = cur;
    return acc;
  }, {});
};
