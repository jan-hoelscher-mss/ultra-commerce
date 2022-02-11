import { createAction, props } from '@ngrx/store';
import { Product } from "../../../product/models/product";

export const add = createAction('cart_add_product', props<{ product: Product }>());
export const update = createAction('cart_update_product', props<{ product: Product, quantity: number }>());
export const remove = createAction('cart_remove_product', props<{ product: Product }>());
