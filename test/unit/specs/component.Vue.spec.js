import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import App from '../../../src/App.vue'
import router from '../../../src/router'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Component: App', () => {
    let actions
    let store

    beforeEach(() => {
        actions = {
            loadProductList: sinon.spy(),
            loadCart: sinon.spy()
        }
        store = new Vuex.Store({
            state: {
                productList: [],
                selectedProductsCount: 0
            },
            getters: {
                selectedProductsCount: state => state.selectedProductsCount,
                productList: state => state.productList
            },
            actions
        })

        mount(App, {
            store,
            localVue,
            router
        })
    })

    describe('Created hook', () => {
        it(`should dispatch the "loadProductList" action`, () => {
            return actions.loadProductList.should.have.been.called
        })

        it(`should dispatch the "loadCart" action`, () => {
            return actions.loadCart.should.have.been.called
        })
    })
})
