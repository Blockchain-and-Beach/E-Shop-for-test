import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import ProductAmountSetter from '../../../src/components/product/ProductAmountSetter'
import { Product } from '../../testutils/classes'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Component: ProductAmountSetter', () => {
    let actions
    let store
    let wrapper
    let item

    beforeEach(() => {
        actions = {
            setOrderValue: sinon.spy()
        }
        store = new Vuex.Store({
            actions
        })

        item = new Product(1, 'Product', 50)
        item.date = new Date()
        item.number = 1

        wrapper = mount(ProductAmountSetter, {
            store,
            localVue,
            propsData: {
                item
            }
        })
    })

    describe('Computed', () => {
        describe('itemNumber', () => {
            it(`should return the number of the current item`, () => {
                expect(wrapper.vm.itemNumber).to.equal(item.number)
            })

            it(`should dispatch the "setOrderValue" action when assigning a value`, () => {
                const newValue = 10
                wrapper.vm.itemNumber = newValue

                return actions.setOrderValue.should.have.been.called
            })

            it(`should not to dispatch the "setOrderValue" action when assigning 
          a value that is less than 1`, () => {
                const newValue = 0
                wrapper.vm.itemNumber = newValue

                return actions.setOrderValue.should.not.have.been.called
            })
        })
    })

    describe('Methods', () => {
        describe('validateInput', () => {
            const event = {
                target: {
                    value: 0
                }
            }

            it(`should set the value of the input to "1" if the current value is 
          less than 1`, () => {
                wrapper.vm.validateInput(event)

                expect(event.target.value).to.equal(1)
            })

            it(`should not to set the value of the input to "1" if the current value
          is not less than 1`, () => {
                event.target.value = 10
                wrapper.vm.validateInput(event)

                expect(event.target.value).to.equal(10)
            })
        })
    })
})
