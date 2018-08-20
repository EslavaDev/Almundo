import {DATA, SEARCH} from '../types';

export const dataApi = (query) => ({
  type: DATA,
  payload: {
    query
  }
})

export const dataApiAsync = () => (dispatch) => {

      return fetch('http://localhost:3000/api/v1/hotel/fetchAll', {
          method: 'GET',
      }).then((res) => res.json())
          .then(res => {
              return dispatch(dataApi(res))
          }).catch((e) => {
              console.log(e)
          })
}

export const searchApiInpunt = query =>({
  type: SEARCH,
  payload:{
    query
  }
})

