import { getProductList } from '../../../api'

const actions = {
    // Load the list of products
    loadProductList ({ commit }) {
        getProductList().then(result => {
            commit('updateProductList', result)
        })
    }
}

export default actions
