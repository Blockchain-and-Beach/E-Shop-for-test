import mutations from './mutations'
import actions from './actions'

const state = {
    selectedProducts: null
}

const getters = {
    /* Returns an array of selected
    products sorted by date of selection */
    selectedProducts: state => {
        if (Array.isArray(state.selectedProducts) &&
      state.selectedProducts.length > 0) {
            return state.selectedProducts.sort((a, b) => {
                if (a.date > b.date) return -1
                else return 1
            })
        } else {
            return null
        }
    },
    // Count of the selected products
    selectedProductsCount: state => {
        if (Array.isArray(state.selectedProducts)) {
            return state.selectedProducts.length
        } else {
            return 0
        }
    },
    // Total price of the selected products
    selectedProductsPrice: state => {
        if (Array.isArray(state.selectedProducts)) {
            return state.selectedProducts.reduce((result, item) => {
                return (result += item.number * item.price)
            }, 0)
        } else {
            return 0
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
