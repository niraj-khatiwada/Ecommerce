const INITIAL_STATE = {
  loggedInUser: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN_USER':
      return { ...state, loggedInUser: action.payload }
    default:
      return state
  }
}

export default userReducer
