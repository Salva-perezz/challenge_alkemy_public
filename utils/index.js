const isObjectEmpty = (object) => {
    return Object.keys(object).length === 0;
}

const filterFunction = (objectWithQuery, arrayToFilter) => {
    const query = Object.keys(objectWithQuery)[0];
    const queryValue = objectWithQuery[query].toLowerCase();

    const filteredArray = arrayToFilter.filter(element => {
        const fieldToCheck = element[query].toLowerCase();
        return fieldToCheck.includes(queryValue);
    });

    return filteredArray;
};

const checkQuery = (query) => {
    let response = false;
    const queryPropertie = Object.keys(query)[0];

    switch (queryPropertie) {
        case 'title':
            response = true;
            break;
        case 'genre':
            response = true;
            break;
        case 'order':
            response = true;
            break;
        case 'name':
            response = true;
            break;
        case 'age':
            response = true;
            break;
        case 'movies':
            response = true;
            break;
        default:
            break;
    };

    return response;
};

module.exports = { isObjectEmpty, filterFunction, checkQuery };