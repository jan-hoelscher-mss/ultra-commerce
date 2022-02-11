import { createReducer, on } from '@ngrx/store';
import { add, update, remove } from '../actions/cart.actions';

export const initialState = [];

export function cartReducer(state: any, action: any) {
  return createReducer(initialState,
    on(add, (state: any, {product}) => {
      console.log("Add product:", product)
      let products = Object.assign([], state);
      const existingProduct = products.find((p: any) => {
        return p.product.id == product.id;
      });
      if( existingProduct != null ){
        existingProduct.quantity ++;
      }else{
        return state.concat([{product: product, quantity:1}])
      }
      return products;
    }),
    on(update, (state: any, {product, quantity}) => {
      if(quantity > 0){
        state.find((p: any) => {
          return p.product.id == product.id;
        }).quantity = quantity;
      }else{
        return state.filter((p: any) => {
          return p.product.id != product.id;
        });
      }
      return state;
    } ),
    on(remove, (state: any, {product}) => {
      return state.filter((p: any) => {
        return p.product.id != product.id;
      });
    }),
  )(state, action);
}
