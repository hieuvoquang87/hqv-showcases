import { NAVIGATE_TO_PAGE } from '../action-types';

const navigation = (state = {}, action) => {
  switch (action.type) {
    case NAVIGATE_TO_PAGE:
      return {
        ...state,
        ...{ currentPage: action.data.pageName },
      };
    default:
      return state;
  }
};

export default navigation;