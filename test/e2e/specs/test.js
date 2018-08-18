// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'The products page e2e test': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL

        browser
            .url(devServer)
            .waitForElementVisible('#app', 5000)
            .assert.urlContains('products')
            .assert.elementPresent('#appNavbar')
            .assert.elementPresent('#homeLink')
            .assert.elementPresent('#cartLink')
            .assert.containsText('.app-navbar__page', 'Products')
            .assert.elementNotPresent('.app-navbar__counter')
            .assert.elementPresent('#productList')
            .assert.elementPresent('.product')
            .assert.elementPresent('.product-button')
        // Select product buttons
            .elements('css selector', '.product-button', result => {
                const elements = result.value
                if (elements.length >= 2) {
                    browser
                    // selection of 2 products
                        .elementIdClick(elements[0].ELEMENT)
                        .elementIdClick(elements[1].ELEMENT)
                    // Make sure that the counter is displayed
                        .assert.elementPresent('.app-navbar__counter')
                    /* Make sure, that the counter displays "2",
            when two products are selected */
                        .assert.containsText('.app-navbar__counter', 2)
                }
            })
            .end()
    },

    'The cart page e2e test': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL

        browser
            .url(devServer)
            .waitForElementVisible('#app', 5000)
        // Go to the cart page
            .click('#cartLink')
            .assert.urlContains('cart')
            .assert.elementPresent('#productCart')
            .assert.elementPresent('#emptyMessage')
            .assert.containsText('#emptyMessage', 'The cart is empty')
            .assert.elementNotPresent('.product-cart-item')
            .assert.elementNotPresent('#productCartBottomNav')
        // Go to the home page
            .click('#homeLink')
            .assert.urlContains('products')
            .elements('css selector', '.product-button', result => {
                // Select item buttons in the products list
                const elements = result.value

                if (elements && elements.length >= 2) {
                    /* Click once the first item and twice the second item */
                    browser
                        .elementIdClick(elements[0].ELEMENT)
                        .elementIdClick(elements[1].ELEMENT)
                        .elementIdClick(elements[1].ELEMENT)
                    // Go to the cart page
                        .click('#cartLink')
                        .assert.urlContains('cart')
                        .assert.elementPresent('#productCart')
                        .assert.elementPresent('.product-cart__list')
                        .assert.elementPresent('#productCartBottomNav')
                        .assert.elementPresent('#totalPrice')
                        .assert.elementPresent('#clearCart')
                        .elements('css selector', '.product-cart-item', result => {
                            // Test the products in the shopping cart
                            const elements = result.value
                            const element1 = elements[0].ELEMENT

                            // Make sure that the number of products in the cart is 2
                            browser.assert.equal(elements.length, 2)

                            // Make sure that the counter of the total price is not empty
                            browser.getText('#totalPrice', result => {
                                browser.assert.equal(!!result.value, true)
                            })
                            // select the element1 input
                            browser.elementIdElement(element1, 'css selector',
                                '.product-amount-setter__input', result => {
                                    const element1NumberInput = result.value.ELEMENT
                                    // Make sure that the input value of the element1 is 2
                                    browser.elementIdAttribute(element1NumberInput, 'value', result => {
                                        browser.assert.equal(result.value, 2)
                                    })

                                    // select the element1 increase button
                                    browser.elementIdElement(element1, 'css selector',
                                        '.product-amount-setter__increase', result => {
                                            const element1IncreaseButton = result.value.ELEMENT
                                            // Click on the increase button
                                            browser.elementIdClick(element1IncreaseButton)
                                        })

                                    // Make sure that the input value of the element1 now is 3
                                    browser.elementIdAttribute(element1NumberInput, 'value', result => {
                                        browser.assert.equal(result.value, 3)
                                    })

                                    // select the element1 decrease button
                                    browser.elementIdElement(element1, 'css selector',
                                        '.product-amount-setter__decrease', result => {
                                            const element1DecreaseButton = result.value.ELEMENT
                                            // Click on the decrease button
                                            browser.elementIdClick(element1DecreaseButton)
                                        })

                                    // Make sure that the input value of the element1 now is 2
                                    browser.elementIdAttribute(element1NumberInput, 'value', result => {
                                        browser.assert.equal(result.value, 2)
                                    })
                                })
                        })
                }
            })
        // Delete 1 cart item
            .execute(() => {
                document.querySelector('.product-button').click()
            })
        // Make sure that the 1 cart item was deleted
            .elements('css selector', '.product-cart-item', result => {
                browser.assert.equal(result.value.length, 1)
            })
            .click('#clearCart')
        // Make sure that the cart is empty
            .elements('css selector', '.product-cart-item', result => {
                browser.assert.equal(result.value.length, 0)
            })
            .assert.elementNotPresent('.product-cart-item')
            .end()
    }
}
