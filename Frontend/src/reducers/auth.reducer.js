const intialState = {
  isAuth: false,
  token: null,
};

export default function authReducer(state = intialState, action) {
  switch (action.type) {
    case "GET_TOKEN":
      return {
        ...state,
        isAuth: true,
        token: action.payload,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    case "REMEMBER_ME":
      return {
        ...state,
        isAuth: true,
      };
    default:
      return state;
  }
}
