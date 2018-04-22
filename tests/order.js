const customer = require('./customer');
const product = require('./product');

const createDataUtil = {
    '[Create] Customer Page': customer['Open Customer Page'],
    'Create Customer': customer['Create Customer'],
    '[Create] Product Page': product['Open Product Page'],
    'Create Product': product['Create Product'],
};

const deleteDataUtil = {
    '[Delete] Open Customer Page': customer['Open Customer Page'],
    'Delete Customer': customer['Delete Customer'],
    '[Delete] Open Product Page': product['Open Product Page'],
    'Delete Product': product['Delete Product'],
};

module.exports = {
    ...createDataUtil,
    'Open Order Page': function (browser) {
        this.page = browser.page.order();
        this.value = {
            quantity: '1',
            editQuantity: '5',
        };

        this.page
            .navigate()
            .waitForElementVisible('body')
            .click('@url')
            .waitForElementNotPresent('@loader');

        browser.elements(this.page.props.selector, this.page.props.dataElement, (result) => {
            this.prevTotalData = result.value.length;
        });
    },
    '[Create] Back Button': function (browser) {
        this.page
            .click('@addButton')
            .waitForElementVisible('@form')
            .click('@backButton')
            .waitForElementPresent('@list')
            .waitForElementNotPresent('@loader');
    },
    'Create Order': function (browser) {
        this.page
            .click('@addButton')
            .waitForElementVisible('@form');

        this.page
            .click('@dateButton')
            .waitForElementVisible('@firstDate')
            .click('@firstDate');

        this.page.expect.element('@customerSelect').to.be.enabled;

        this.page
            .click('@customerSelect')
            .waitForElementVisible('@customerValue')
            .click('@customerValue');

        this.page
            .click('@addDetailButton')
            .click('@productSelect')
            .waitForElementVisible('@productValue')
            .click('@productValue');

        this.page
            .clearValue('@quantityInput')
            .setValue('@quantityInput', this.value.quantity)
            .assert.value('@quantityInput', this.value.quantity);

        this.page
            .click('@addDetailButton')
            .waitForElementPresent('@deleteDetailButton')
            .click('@deleteDetailButton')
            .waitForElementNotPresent('@deleteDetailButton');

        this.page
            .click('@submitButton')
            .waitForElementPresent('@list')
            .waitForElementNotPresent('@loader');

        browser.elements(this.page.props.selector, this.page.props.dataElement, (result) => {
            this.page.assert.notEqual(this.prevTotalData, result.value.length);
        });
    },
    'View Order': function (browser) {
        this.page
            .click('@lastDataViewButton')
            .waitForElementNotPresent('@loader');

        this.page.expect.element('table').to.be.present;
    },
    '[Edit] Back Button': function (browser) {
        this.page
            .click('@editButton')
            .waitForElementNotPresent('@loader')
            .click('@backButton')
            .waitForElementPresent('table')
            .waitForElementNotPresent('@loader');
    },
    'Edit Order': function (browser) {
        this.page
            .click('@editButton')
            .waitForElementNotPresent('@loader');

        this.page
            .click('@dateButton')
            .waitForElementVisible('@fifthDate')
            .click('@fifthDate');

        this.page.expect.element('@customerSelect').to.be.enabled;

        this.page
            .clearValue('@quantityInput')
            .setValue('@quantityInput', this.value.editQuantity)
            .assert.value('@quantityInput', this.value.editQuantity);

        this.page
            .click('@submitButton')
            .waitForElementPresent('table')
            .waitForElementNotPresent('@loader')
            .click('@viewBackButton')
            .waitForElementPresent('@list')
            .waitForElementNotPresent('@loader');;
    },
    'Delete Order': function (browser) {
        browser.elements(this.page.props.selector, this.page.props.dataElement, (result) => {
            this.prevTotalData = result.value.length;
        });

        this.page
            .click('@lastDataViewButton')
            .waitForElementNotPresent('@loader');

        this.page.expect.element('@deleteButton').to.be.present;

        this.page.click('@deleteButton');
        browser.acceptAlert();

        this.page
            .waitForElementPresent('@list')
            .waitForElementNotPresent('@loader');

        browser.elements(this.page.props.selector, this.page.props.dataElement, (result) => {
            this.page.assert.notEqual(this.prevTotalData, result.value.length);
        });
    },
    ...deleteDataUtil,
    'End': function (browser) {
        browser.end();
    },
};
