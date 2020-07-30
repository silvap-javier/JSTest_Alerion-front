import { _getItems,_createItem,_editItem} from '../repository/RepositoryItems';

export const getItems = (callback, callbackError) => {
  _getItems(callback, callbackError);
};

export const editItem = (item,callback, callbackError) => {
  _editItem(item,callback, callbackError);
};

export const createItem = (callback, callbackError) => {
  _createItem(callback, callbackError);
};