import { createReducer, on } from '@ngrx/store';
import { add, update, remove } from '../actions/cart.actions';

export const initialState = loadCart();

const _cartRedurcer = createReducer(initialState,
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
      data = state.concat([{product: product, quantity:1}])
    }
    saveCart(data);
    return data;
  }),
  on(update, (state: any, {product, quantity}) => {
    let data = state;
    if(quantity > 0){
      data = state.map((p: any) => {
        if(p.product.id != product.id){
          return p;
        }else{
          return {product: product, quantity: quantity}
        }
      });
    }else{
      data = state.filter((p: any) => {
        return p.product.id != product.id;
      });
    }
    saveCart(data);
    return data;
  }),
  on(remove, (state: any, {product}) => {
    let data =  state.filter((p: any) => {
      return p.product.id != product.id;
    });
    saveCart(data);
    return data;
  }),
);

function saveCart(cart: any){
  if(cart != null){
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

function loadCart(): any{
  return JSON.parse(localStorage.getItem('cart') || "[]");
}

export function cartReducer(state: any, action: any) {
  return _cartRedurcer(state, action);
}
