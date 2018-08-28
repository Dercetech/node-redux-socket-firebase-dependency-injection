// const Promise = require('bluebird');

module.exports = function(logger, exitCodes, socketService, store, chatStore, socketStore) {
  const interface = { start };

  function start() {
    //
    // Register feature stores
    store.addStore(chatStore);
    store.addStore(socketStore);

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

// const document = firestore.doc('posts/intro-to-firestore3');
// document
//   .set({
//     title: 'Jem was here ୧༼ಠ益ಠ༽୨',
//     body: 'Hello World'
//   })
//   .then(() => {
//     // Document created successfully.
//   });
