import mutations from './mutations'
import actions from './actions'

const DEFAULT_CURRENCY = {
    name: 'Sunrin Coin',
    symbol: ' src'
}

const state = {
    productList: null,
    currency: DEFAULT_CURRENCY
}

const getters = {
    productList: state => {
        if (Array.isArray(state.productList) && state.productList.length > 0) {
            return state.productList
        } else {
            return null
        }
    },
    currency: state => {
        if (state.currency) {
            return state.currency
        } else {
            return DEFAULT_CURRENCY
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
