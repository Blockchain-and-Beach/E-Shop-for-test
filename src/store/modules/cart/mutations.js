const mutations = {
    // Updates a selectedProducts list with the new value
    updateSelectedProducts (state, value) {
        state.selectedProducts = value
    },

    /* Append a selected product to the shopping cart */
    appendSelectedProduct (state, product) {
    // Create a copy of selected product and add specific fields
        const cartItem = Object.assign({}, product)
        // Selection date
        cartItem.date = new Date()
        // Default number of selected items
        cartItem.number = 1

        if (Array.isArray(state.selectedProducts)) {
            // Search for a similar object in the selected products list
            const findProduct = state.selectedProducts.find(
                item => item.id === cartItem.id
            )

            if (findProduct) {
                const index = state.selectedProducts.indexOf(findProduct)
                state.selectedProducts[index].number++
            } else {
                state.selectedProducts.push(cartItem)
            }
        } else {
            // If selectedProducts is null or undefined
            state.selectedProducts = [cartItem]
        }
    },

    // Updates the number property with a new value for a specific product
    updateProductNumber (state, { product, value }) {
        if (value > 0) {
            const index = state.selectedProducts.indexOf(product)
            state.selectedProducts[index].number = value
        }
    },

    // Increases the number property for a specific product by 1
    increaseProductNumber (state, product) {
        const index = state.selectedProducts.indexOf(product)
        state.selectedProducts[index].number++
    },

    // Decreases the number property for a specific product by 1
    decreaseProductNumber (state, product) {
        const index = state.selectedProducts.indexOf(product)

        if (state.selectedProducts[index].number > 1) {
            state.selectedProducts[index].number--
        }
    },

    // Removes the specific product from the list of selected products
    removeSelectedProduct (state, product) {
        const index = state.selectedProducts.indexOf(product)
        state.selectedProducts.splice(index, 1)
    }
}

export default mutations
