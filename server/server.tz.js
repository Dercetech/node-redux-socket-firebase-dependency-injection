module.exports = function configure(injector) {
  injector.register('main', require('./main'));
  injector.register('store', require('./store'));
};
