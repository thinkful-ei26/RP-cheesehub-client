import { API_BASE_URL } from '../config';

export const fetchDataSuccess = (data) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    data 
  }
}

export const fetchData = () => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/users`)
    .then(response => response.json())
    .then(data => dispatch(fetchDataSuccess(data)))
    .catch(error => console.log(error))
  }
}

