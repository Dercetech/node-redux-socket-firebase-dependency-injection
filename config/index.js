const path = require('path');

module.exports = {
  rootFolder: path.join(__dirname, '..'),

  firebase: {
    projectId: 'mc-tuto-1',
    keyFilename: path.join(__dirname, 'firebase', 'mc-tuto-1-8bcec8bd7c5d.json'),
    settings: { timestampsInSnapshots: true }
  },

  exitCodes: {
    MULTIPLE_SINGLETON_INSTANCE: 30
  }
};
