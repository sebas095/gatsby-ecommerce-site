import { ADD_ITEM, CLEAR_SHOPPING_CART, REMOVE_ITEM } from "../actionTypes"

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      // Buscamos si el SKU a agregar ya está en el carrito
      const skuIfAny = state.find(sku => sku.id === action.payload.id)

      if (skuIfAny) {
        return state.map(sku => {
          if (sku.id === skuIfAny.id)
            return { ...sku, quantity: sku.quantity + 1 }
          return sku
        })
      }

      // Agregar el SKU e iniciar cantidad 1
      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ]

    case REMOVE_ITEM:
      return state.filter(sku => sku.id !== action.payload.id)

    case CLEAR_SHOPPING_CART:
      return []

    default:
      return state
  }
}
