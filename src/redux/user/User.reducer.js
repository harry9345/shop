import userTypes from "./User.types";

const INITIAL_STATE = {
  currentUser: null,
};

const useReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.playload,
      };

    default:
      return action;
  }
};
export default useReducer;
