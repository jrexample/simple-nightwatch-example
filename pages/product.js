module.exports = {
    url: 'https://simple-graphql-example-client.herokuapp.com',
    elements: {
        url: 'a[href="/products/list"]',
        loader: '.spinner',
        /* List */
        addButton: 'a[href="/products/create"]',
        list: '.list',
        lastDataName: '.card:last-child .card-content h4 b',
        lastDataDescription: '.card:last-child .card-content p',
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
        form: '#product-form',
        nameInput: '#name',
        quantityInput: '#quantity',
        priceInput: '#price',
        descriptionInput: '#description',
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
