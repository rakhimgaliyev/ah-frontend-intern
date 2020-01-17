function getSortedArray(data, key, isInit) {
  if (data === null || data.length === 0) {
    return [];
  }

  if (localStorage.getItem("key") !== key) {
    localStorage.setItem("reversed", "0");
    localStorage.setItem("key", key);
  }

  if (isInit !== true) {
    if (localStorage.getItem("reversed") === "1") {
      localStorage.setItem("reversed", "0");
    } else {
      localStorage.setItem("reversed", "1");
    }
    return data.reverse();
  }

  let reversed = localStorage.getItem("reversed");

  if (reversed === "0") {
    return data.concat().sort((first, second) => {
      if (first[key].toUpperCase() > second[key].toUpperCase()) {
        return 1;
      }
      return -1;
    });
  }
  return data.reverse();
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
