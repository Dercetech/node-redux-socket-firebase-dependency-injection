const path = require('path');

module.exports = function factory() {
  const environment = {
    rootFolder: path.join(__dirname, '..'),

    // Allowed log level (0: error, 1: warn, 2: info, 3: spam)
    log: 2,

    http: {
      port: 80,
      host: 'localhost'
    },

    socket: {
      port: 3000
    },

    firebase: {
      projectId: 'mc-tuto-1',
      keyFilename: path.join(__dirname, 'firebase', 'mc-tuto-1-8bcec8bd7c5d.json'),
      firestore: {
        settings: { timestampsInSnapshots: true }
      }
    },

    exitCodes: {}
  };

  return environment;
};
