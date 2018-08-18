import Axios from 'axios'

const actions = {
    // Add new product to the list of selected products
    addOrder ({ commit, dispatch }, product) {
    // Update store
        commit('appendSelectedProduct', product)
        // Save changed data
        dispatch('syncCart')
    },

    /* Set the number property for the specific product
  in the list of selected products */
    setOrderValue ({ commit, dispatch }, { product, value }) {
        commit('updateProductNumber', { product: product, value: value })
        dispatch('syncCart')
    },

    /* Increase the number property for the specific product
  in the list of selected products by 1 */
    increaseOrderValue ({ dispatch, commit }, product) {
        commit('increaseProductNumber', product)
        dispatch('syncCart')
    },

    /* Decrease the number property for the specific product
  in the list of selected products by 1 */
    decreaseOrderValue ({ dispatch, commit }, product) {
        commit('decreaseProductNumber', product)
        dispatch('syncCart')
    },

    // Remove product from the list of selected products
    removeFromCart ({ dispatch, commit }, product) {
        commit('removeSelectedProduct', product)
        dispatch('syncCart')
    },

    Purchase ({state}) {
        Axios.post('/payment/request/:title', {
            jsonData: JSON.stringify(state)
        })
    },

    // Clear the list of selected products
    clearCart ({ commit, dispatch }) {
        commit('updateSelectedProducts', null)
        dispatch('syncCart')
    },

    /* Update local storage  with the list
  of selected products */
    syncCart ({ state }) {
        localStorage.setItem(
            'selectedProducts',
            JSON.stringify(state.selectedProducts)
        )
    },

    /* Load the list of selected products
  from the local storage */
    loadCart ({ commit }) {
        if (localStorage.getItem('selectedProducts')) {
            commit(
                'updateSelectedProducts',
                JSON.parse(localStorage.getItem('selectedProducts'))
            )
        }
    }
}

export default actions
