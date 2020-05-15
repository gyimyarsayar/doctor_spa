import { SET_STATE } from "../actions/types";

const initState = {
  drawerOpen: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
