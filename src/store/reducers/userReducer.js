import { SET_CURRENT_USER } from 'store/actions/usersActions';

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
