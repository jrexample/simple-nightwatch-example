module.exports = {
    page: null,
    value: null,
    'Open Customer Page': function (browser) {
        this.page = browser.page.customer();
        this.value = {
            name: 'Jacky Rusly',
            age: '23',
            ageDescription: '23 years old'
        };

        this.page.navigate()
            .waitForElementVisible('body');

        this.page
            .click('@url')
            .waitForElementNotPresent('@loader');
    },
    'Add Customer': function (browser) {
        this.page
            .click('@addButton')
            .waitForElementVisible('@form');

        this.page
            .setValue('@nameInput', this.value.name)
            .assert.value('@nameInput', this.value.name)
            .clearValue('@ageInput')
            .setValue('@ageInput', this.value.age)
            .assert.value('@ageInput', this.value.age)
            .click('@submitButton')
            .waitForElementPresent('@list')
            .waitForElementNotPresent('@loader')
            .assert.containsText('@lastDataName', this.value.name)
            .assert.containsText('@lastDataAge', this.value.ageDescription);
    },
    'Delete Customer': function (browser) {
        this.page.click('@lastDataDeleteButton');
        browser.acceptAlert();

        this.page
            .waitForElementNotPresent('@loader')
            .expect.element('@lastDataName').text.to.not.equal(this.value.name);

        browser.end();
    },
};
