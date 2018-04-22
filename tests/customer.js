module.exports = {
    page: null,
    value: null,
    prevTotalData: null,
    'Open Customer Page': function (browser) {
        this.page = browser.page.customer();
        this.value = {
            name: 'Unit Testing E2E',
            age: '23',
            ageDescription: '23 years old',
            editName: 'Unit Testing E2E Edit Value',
            editAge: '1000',
            editAgeDescription: '1000 years old',
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
    'Create Customer': function (browser) {
        this.page
            .click('@addButton')
            .waitForElementVisible('@form');

        this.page
            .setValue('@nameInput', this.value.name)
            .assert.value('@nameInput', this.value.name)

        this.page
            .clearValue('@ageInput')
            .setValue('@ageInput', this.value.age)
            .assert.value('@ageInput', this.value.age)

        this.page
            .click('@submitButton')
            .waitForElementPresent('@list')
            .waitForElementNotPresent('@loader')
            .assert.containsText('@lastDataName', this.value.name)
            .assert.containsText('@lastDataAge', this.value.ageDescription);
    },
    '[Edit] Back Button': function (browser) {
        this.page
            .click('@lastDataEditButton')
            .waitForElementNotPresent('@loader')
            .click('@backButton')
            .waitForElementPresent('@list')
            .waitForElementNotPresent('@loader');
    },
    'Edit Customer': function (browser) {
        this.page
            .click('@lastDataEditButton')
            .waitForElementNotPresent('@loader');

        this.page
            .clearValue('@nameInput')
            .setValue('@nameInput', this.value.editName)
            .assert.value('@nameInput', this.value.editName)

        this.page
            .clearValue('@ageInput')
            .setValue('@ageInput', this.value.editAge)
            .assert.value('@ageInput', this.value.editAge)

        this.page
            .click('@submitButton')
            .waitForElementPresent('@list')
            .waitForElementNotPresent('@loader')
            .assert.containsText('@lastDataName', this.value.editName)
            .assert.containsText('@lastDataAge', this.value.editAgeDescription);
    },
    'Delete Customer': function (browser) {
        browser.elements(this.page.props.selector, this.page.props.dataElement, (result) => {
            this.prevTotalData = result.value.length;
        });

        this.page.click('@lastDataDeleteButton');
        browser.acceptAlert();

        this.page.waitForElementNotPresent('@loader');

        browser.elements(this.page.props.selector, this.page.props.dataElement, (result) => {
            this.page.assert.notEqual(this.prevTotalData, result.value.length);
        });
    },
    'End': function (browser) {
        browser.end();
    },
};
