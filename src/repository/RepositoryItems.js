import axios from '../services/axios';

export const _getItems = (callback, callbackError) => {
  axios.get('items/')
    .then(response => {     
      if (response && response.status && response.status === 200) {
          callback && callback(response.data.data);
      } else {
          callbackError && callbackError("Unexpected error");
      }
    }).catch(err => {
      callbackError && callbackError(err);
    });
}

export const _editItem = (item,callback, callbackError) => {
  axios.put('items/',item)
    .then(response => {     
      if (response && response.status && response.status === 200) {
          callback && callback(response.data.data);
      } else {
          callbackError && callbackError("Unexpected error");
      }
    }).catch(err => {
      callbackError && callbackError(err);
    });
}

export const _createItem = (item,callback, callbackError) => {
  axios.post('items/',item)
    .then(response => {     
      if (response && response.status && response.status === 200) {
          callback && callback(response.data.data);
      } else {
          callbackError && callbackError("Unexpected error");
      }
    }).catch(err => {
      callbackError && callbackError(err);
    });
}