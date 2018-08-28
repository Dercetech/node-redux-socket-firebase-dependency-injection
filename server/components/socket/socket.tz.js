module.exports = function configure(injector) {
  injector.register('socketStoreKey', () => 'socket');
  injector.register('socketStore', require('./socket.store'));
  injector.register('socketActions', require('./socket.actions'));
  injector.register('socketService', require('./socket.service'));
};
