import { createReducer, on } from '@ngrx/store';
import { add, update, remove } from '../actions/cart.actions';

export const initialState = [];

export function cartReducer(state: any, action: any) {
  return createReducer(initialState,
    on(add, (state: any, {product}) => {
      let updated = false;
      let data = state.map((p: any) => {
        if(p.product.id != product.id){
          return p;
        }else{
          updated = true;
          return {product: product, quantity:p.quantity +1}
        }
      });
      if(!updated){
        return state.concat([{product: product, quantity:1}])
      }
      return data;
    }),
    on(update, (state: any, {product, quantity}) => {
      if(quantity > 0){
        return state.map((p: any) => {
          if(p.product.id != product.id){
            return p;
          }else{
            return {product: product, quantity: quantity}
          }
        });
      }else{
        return state.filter((p: any) => {
          return p.product.id != product.id;
        });
      }
    }),
    on(remove, (state: any, {product}) => {
      return state.filter((p: any) => {
        return p.product.id != product.id;
      });
    }),
  )(state, action);
}
