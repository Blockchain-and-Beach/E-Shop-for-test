/* API mockups */
import productList from './products.json'

export function getProductList () {
    return new Promise((resolve, reject) => {
        resolve(productList)
    })
}
