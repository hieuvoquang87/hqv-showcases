import { NAVIGATE_TO_PAGE, SELECT_POKEMON, } from '../action-types';
import { DETAIL_PAGE } from '../constants'

const navigation = (state = {}, action) => {
  switch (action.type) {
    case SELECT_POKEMON: return {
      ...state,
      ...{ currentPage: DETAIL_PAGE },
    };
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