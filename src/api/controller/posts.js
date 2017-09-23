const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.success([{
      title: '123123',
      content: '发的萨芬是的发'
    }]);
  }
};
