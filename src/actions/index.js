export const sortStraightByKey = key => {
  return {
    type: "SORT_STRAIGHT_BY_KEY",
    payload: key
  };
};

export const setData = data => {
  return {
    type: "SET_DATA",
    payload: data
  };
};
