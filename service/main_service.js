const axios = require("axios");
const base_api = "https://enigmatic-forest-64947.herokuapp.com/api/v1";

const getData = async () => {
    return await axios.get(base_api)
    .then(data => data.data)
    .catch(err => next(err));
}

module.exports = {getData};