import { ProfilesSortStorage } from "../repository/localStorage/profilesSortStorage";

function directSort(data, key) {
  if (data === null || data === undefined) {
    return [];
  }
  return data.concat().sort((first, second) => {
    if (first[key].toUpperCase() > second[key].toUpperCase()) {
      return 1;
    }
    return -1;
  });
}

function getSortedArray(data, key, isInit) {
  if (data === null || data.length === 0) {
    return [];
  }

  if (isInit === true) {
    let result = directSort(data, key);
    if (ProfilesSortStorage.isProfilesOrderReversed()) {
      return result.reverse();
    }
    return result;
  }

  if (ProfilesSortStorage.isProfilesSortKeyEquals(key)) {
    ProfilesSortStorage.changeProfilesOrderStatus();
    return data.concat().reverse();
  }

  ProfilesSortStorage.setProfilesSortKey(key);
  ProfilesSortStorage.discardProfilesOrderStatus();
  return directSort(data, key);
}

function setData(data) {
  if (localStorage.getItem("key") !== null) {
    return getSortedArray(data, localStorage.getItem("key"), true);
  }
  return data;
}

const sorterReducer = (state = [], action) => {
  switch (action.type) {
    case "SORT_STRAIGHT_BY_KEY":
      let data = state.concat();
      return getSortedArray(data, action.payload);
    case "SET_DATA":
      return setData(action.payload);
    default:
      return state;
  }
};

export default sorterReducer;
