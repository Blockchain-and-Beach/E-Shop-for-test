import { mount } from 'vue-test-utils'
import ProductButton from '../../../src/components/product/ProductButton'

describe('Computed', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(ProductButton)
    })
    describe('classesString', () => {
        it(`should return a string with classes, separated by 
        spaces`, () => {
            wrapper.setProps({
                classes: ['a', 'b', 'c']
            })

            expect(wrapper.vm.classesString).to.equal('a b c')
        })

        it(`should return an empty string if the given class list 
        is empty`, () => {
            wrapper.setProps({
                classes: []
            })

            expect(wrapper.vm.classesString).to.equal('')
        })

        it(`should return an empty string if the classes property 
        is not array`, () => {
            wrapper.setProps({
                classes: []
            })

            expect(wrapper.vm.classesString).to.equal('')
        })
    })
})
