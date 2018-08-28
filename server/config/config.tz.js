'use strict';
module.exports = function configure(injector) {
  injector.register('ENV', require('./environment'));
  injector.register('exitCodes', require('./exit-codes'));
};
