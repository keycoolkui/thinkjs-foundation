const Base = require('./base.js');
const axios = require('axios');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  docAction() {
    return this.display();
  }


  async swaggerAction() {
    const res = await axios.get('http://petstore.swagger.io/v2/swagger.json');
    this.body = res.data;
  }
};
