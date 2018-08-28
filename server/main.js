// const Promise = require('bluebird');

module.exports = function(
  logger,
  exitCodes,
  store,
  // Socket
  socketService,
  socketStore,
  // Chat
  chatStore,
  chatService
) {
  const interface = { start };

  function start() {
    //
    // Register feature stores
    store.addStore(chatStore);
    store.addStore(socketStore);

    chatService.sendMessage('Jem was here ୧༼ಠ益ಠ༽୨', 'Jem');

    // Start socket server
    logger.spam('[main] server starting...');
    socketService.start().then(err => {
      if (err) {
        logger.error('[main] server error: ', err);
        process.exit(exitCodes.SOCKET_START_ERROR);
      }

      logger.info('[main] server ready');
    });
  }

  return interface;
};
