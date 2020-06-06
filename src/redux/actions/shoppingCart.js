import { ADD_ITEM, CLEAR_SHOPPING_CART, REMOVE_ITEM } from "../actionTypes"

//Action creators for shopping_cart
// Funciones que retornan acciones

/**
 * { type: '', payload: {} }
 *
 */

export const addItem = product => ({
  type: ADD_ITEM,
  payload: product,
})

export const removeItem = product => ({
  type: REMOVE_ITEM,
  payload: product,
})

export const clearShoppingCart = () => ({
  type: CLEAR_SHOPPING_CART,
})
