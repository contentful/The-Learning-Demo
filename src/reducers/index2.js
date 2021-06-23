import { combineReducers } from 'redux';
import ProductsReducer from './products_reducer';
import AssetsReducer from './assets_reducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  assets: AssetsReducer
});
export default rootReducer;
