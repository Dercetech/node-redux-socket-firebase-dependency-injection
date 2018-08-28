module.exports = function configure(injector) {
  injector.register('chatStoreKey', () => 'chat');
  injector.register('chatStore', require('./chat.store'));
  injector.register('chatService', require('./chat.service'));
};
