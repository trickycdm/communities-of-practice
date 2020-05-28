export const removeUserSubscription = (usersArray, email) => usersArray.filter(user => user.email !== email)
export const isSubscribed = (subscribersArray, userEmail) => subscribersArray.filter(sub => sub.email === userEmail).length
