import product from '../../../src/store/modules/products/index'
/* eslint-disable*/
const actionsInjector = require('inject-loader!../../../src/store/modules/products/actions')
/* eslint-enable */

// create the module with mocks for API
const GET_PRODUCT_LIST_RESPONSE = "{ data: 'value' }"

const actions = actionsInjector({
    '../../../api': {
        getProductList () {
            return new Promise(resolve => {
                resolve(GET_PRODUCT_LIST_RESPONSE)
            })
        }
    }
})

describe('Vuex module: product', () => {
    describe('Mutations', () => {
        describe('updateProductList', () => {
            it('should update a list of products', () => {
                const state = {
                    productList: null
                }
                const list = [1, 2, 3]

                product.mutations.updateProductList(state, list)

                expect(state.productList).to.equal(list)
            })
        })
    })

    describe('Actions', () => {
        describe('loadProductList', () => {
            it('should dispatch "updateProductList" mutation', () => {
                const commit = sinon.spy()

                return Promise.resolve(actions.default.loadProductList({commit})).then(null, null, commit).then((result) => {
                    commit.should.have.been.calledWith(
                        'updateProductList',
                        GET_PRODUCT_LIST_RESPONSE
                    )
                })
            })
        })
    })

    describe('Getters', () => {
        describe('productList', () => {
            it('should return a list of products', () => {
                const state = {
                    productList: [1, 2, 3]
                }

                expect(product.getters.productList(state)).to.equal(state.productList)
            })

            it('should return a null value if the lis of products is empty', () => {
                const state = {
                    productList: []
                }

                expect(product.getters.productList(state)).to.equal(null)
            })

            it('should return a null value if the lis of products is not array', () => {
                const state = {
                    productList: null
                }

                expect(product.getters.productList(state)).to.equal(null)
            })
        })

        describe('currency', () => {
            it(`should return a currency`, () => {
                const DEFAULT_CURRENCY = {
                    name: 'USD',
                    symbol: '$'
                }
                const state = {
                    currency: DEFAULT_CURRENCY
                }

                expect(product.getters.currency(state)).to.equal(DEFAULT_CURRENCY)
            })

            it(`should return default currency if the "currency" value 
          is null`, () => {
                const DEFAULT_CURRENCY = {
                    name: 'USD',
                    symbol: '$'
                }
                const state = {
                    currency: null
                }

                expect(product.getters.currency(state)).to.deep.equal(DEFAULT_CURRENCY)
            })
        })
    })
})
