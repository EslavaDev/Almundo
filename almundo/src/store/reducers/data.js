
import {DATA, SEARCH} from '../types';
import {fromJS} from 'immutable';
const initialState ={
        data: {},
        search: []
}

 const data = (state=initialState, action) => {
  switch (action.type) {
  case DATA:{
            return { ...state, search: action.payload }
  }
  case SEARCH:
        return {...state, data:action.payload}
  default:
    return state
  }
}
export default data;