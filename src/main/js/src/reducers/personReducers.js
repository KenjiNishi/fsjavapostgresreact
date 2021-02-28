import { FETCH_PERSONS, CREATE_PERSON, DELETE_PERSON, EDIT_PERSON, GET_PERSON } from '../actions/types';

const initialState = {
  personsList: [],
  selectedItem: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PERSONS:
      return {
        ...state,
        personsList: action.payload
      };
    
    case GET_PERSON:
      return {
        ...state,
        selectedItem: action.payload
      };

    case CREATE_PERSON:
    case DELETE_PERSON:
    case EDIT_PERSON:
    default:
      return state;
  }
}