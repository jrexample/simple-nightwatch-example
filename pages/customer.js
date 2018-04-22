module.exports = {
    url: 'https://simple-graphql-example-client.herokuapp.com',
    elements: {
        url: 'a[href="/customers/list"]',
        loader: '.spinner',
        /* List */
        addButton: 'a[href="/customers/create"]',
        list: '.list',
        lastDataName: '.card:last-child .card-content h4 b',
        lastDataAge: '.card:last-child .card-content p',
        lastDataEditButton: '.card:last-child .card-action a:nth-of-type(1)',
        lastDataDeleteButton: '.card:last-child .card-action a:nth-of-type(2)',
        /* Form */
        form: '#customer-form',
        nameInput: '#name',
        ageInput: '#age',
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
