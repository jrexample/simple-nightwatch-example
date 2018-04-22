module.exports = {
    url: 'https://simple-graphql-example-client.herokuapp.com',
    elements: {
        url: 'a[href="/orders/list"]',
        loader: '.spinner',
        /* List */
        addButton: 'a[href="/orders/create"]',
        list: '.list',
        lastDataViewButton: '.card:last-child .card-action a:nth-of-type(1)',
        /* View */
        viewBackButton: {
            selector: '//a[text()="Back"]',
            locateStrategy: 'xpath',
        },
        editButton: {
            selector: '//a[text()="Edit"]',
            locateStrategy: 'xpath',
        },
        deleteButton: {
            selector: '//a[text()="Delete"]',
            locateStrategy: 'xpath',
        },
        /* Form */
        form: '#order-form',
        dateButton: '.react-date-picker__calendar-button.react-date-picker__button__icon',
        firstDate: '.react-calendar__tile.react-calendar__month-view__days__day:nth-of-type(1)',
        fifthDate: '.react-calendar__tile.react-calendar__month-view__days__day:nth-of-type(5)',
        customerSelect: '#customer',
        customerValue: '#customer option:nth-of-type(2)',
        addDetailButton: '.btn-add',
        productSelect: 'table tr:nth-of-type(1) select',
        productValue: 'table tr:nth-of-type(1) select option:nth-of-type(2)',
        quantityInput: 'table tr:nth-of-type(1) input[type="number"]',
        deleteDetailButton: 'table tr:nth-of-type(2) .btn-delete',
        backButton: {
            selector: '//button[text()="Back"]',
            locateStrategy: 'xpath',
        },
        submitButton: {
            selector: '//button[text()="Submit"]',
            locateStrategy: 'xpath',
        },
    },
    props: {
        selector: 'css selector',
        dataElement: '.card',
    },
};
