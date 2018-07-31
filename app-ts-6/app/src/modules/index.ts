import { combineReducers } from 'redux';
import versions, { VersionsState, VersionActionTypes } from './versions';
import products, { ProductsState, ProductActionTypes } from './products';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
  versions: VersionsState;
  products: ProductsState;
}

export default combineReducers<RootState>({
  versions,
  products
});

type AppAction =
  | VersionActionTypes
  | ProductActionTypes;

export type RootAction = AppAction;