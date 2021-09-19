import userTypes from "./User.types";

const INITIAL_STATE = {
  currentUser: null,
  signInSuccess: false,
  signUpError: [],
  signUpSuccess: false,
  resetPasswordSuccess: false,
  resetPasswordError: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.playload,
      };
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: action.playload,
      };
    case userTypes.SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: action.playload,
      };
    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: action.playload,
      };
    case userTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.playload,
      };
    case userTypes.RESET_PASSWPRD_ERROR:
      return {
        ...state,
        resetPasswordError: action.playload,
      };
    case userTypes.RESET_AUTH_FORMS:
      return {
        ...state,
        signInSuccess: false,
        signUpError: [],
        signUpSuccess: false,
        resetPasswordSuccess: false,
        resetPasswordError: [],
      };
    default:
      return state;
  }
};
export default userReducer;
