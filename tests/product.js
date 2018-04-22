module.exports = {
    page: null,
    value: null,
    prevTotalData: null,
    'Open Product Page': function (browser) {
        this.page = browser.page.product();
        this.value = {
            name: 'Unit Testing E2E',
            quantity: '1',
            price: '5000',
            description: 'Unit Testing E2E Description',
            editName: 'Unit Testing E2E Edit Value',
            editQuantity: '100',
            editPrice: '10000',
            editDescription: 'Unit Testing E2E Description Edit Value',
        };

        this.page
            .navigate()
            .waitForElementVisible('body')
            .click('@url')
            .waitForElementNotPresent('@loader');
    },
    '[Create] Back Button': function (browser) {
        this.page
            .click('@addButton')
            .waitForElementVisible('@form')
            .click('@backButton')
            .waitForElementPresent('@list')
            .waitForElementNotPresent('@loader');
    },
    'Create Product': function (browser) {
        this.page
            .click('@addButton')
            .waitForElementVisible('@form');

        this.page
            .setValue('@nameInput', this.value.name)
            .assert.value('@nameInput', this.value.name);

        this.page
            .clearValue('@quantityInput')
            .setValue('@quantityInput', this.value.quantity)
            .assert.value('@quantityInput', this.value.quantity);

        this.page
            .clearValue('@priceInput')
            .setValue('@priceInput', this.value.price)
            .assert.value('@priceInput', this.value.price);

        this.page
            .setValue('@descriptionInput', this.value.description)
            .assert.value('@descriptionInput', this.value.description);

        this.page
            .click('@submitButton')
            .waitForElementPresent('@list')
            .waitForElementNotPresent('@loader')
            .assert.containsText('@lastDataName', this.value.name)
            .assert.containsText('@lastDataDescription', this.value.description);
    },
    'View Product': function (browser) {
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
    'Edit Product': function (browser) {
        this.page
            .click('@editButton')
            .waitForElementNotPresent('@loader');

        this.page
            .clearValue('@nameInput')
            .setValue('@nameInput', this.value.editName)
            .assert.value('@nameInput', this.value.editName);

        this.page
            .clearValue('@quantityInput')
            .setValue('@quantityInput', this.value.editQuantity)
            .assert.value('@quantityInput', this.value.editQuantity);

        this.page
            .clearValue('@priceInput')
            .setValue('@priceInput', this.value.editPrice)
            .assert.value('@priceInput', this.value.editPrice);

        this.page
            .clearValue('@descriptionInput')
            .setValue('@descriptionInput', this.value.editDescription)
            .assert.value('@descriptionInput', this.value.editDescription);

        this.page
            .click('@submitButton')
            .waitForElementPresent('table')
            .waitForElementNotPresent('@loader')
            .click('@viewBackButton')
            .waitForElementPresent('@list')
            .waitForElementNotPresent('@loader');;
    },
    'Delete Product': function (browser) {
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
    'End': function (browser) {
        browser.end();
    },
};
