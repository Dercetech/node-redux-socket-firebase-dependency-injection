module.exports = function configure(injector) {
  injector.register('logger', require('./logger'));
  injector.register('firebase', require('./firebase'));
};
