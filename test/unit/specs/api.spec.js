// import {getProductList} from '../../../src/api'
/* eslint-disable */
const apiInjector = require('inject-loader!../../../src/api')
/* eslint-enable */

const DEFAULT_VALUE = 'value'
const api = apiInjector({
    './products.json': DEFAULT_VALUE
})

describe('API', () => {
    describe('getProductList', () => {
        it('should return the list of products', () => {
            return api.getProductList().then((result) => {
                expect(result).to.be.equal(DEFAULT_VALUE)
            })
        })
    })
})
