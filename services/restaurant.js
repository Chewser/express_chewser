const fetch = require('node-fetch');

const yelp = {};
const Token = process.env.access_token;


yelp.search = (lat, long, term) => {

  return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${lat}&longitude=${long}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${Token}`

    }
  })

};


module.exports = yelp;
