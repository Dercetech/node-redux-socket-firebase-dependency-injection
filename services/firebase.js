// Dependencies
const Promise = require('bluebird').Promise;
const Firestore = require('@google-cloud/firestore');

// App constants
const { firebase, exitCodes } = require('../config');

// Firebase setup
const { projectId, keyFilename, settings } = firebase;
const firestore = new Firestore({ projectId, keyFilename });
firestore.settings(settings);

// Singleton handling
let firestoreInstanceCount = 0;
console.log('[Firebase] > initializing module');

function getFirestoreInstance() {
  // Jem encourages the use of dependency injection (DI)
  if (firestoreInstanceCount++) {
    console.error('[Firebase] > warning: firestore instance requested multiple times');
    process.exit(exitCodes.MULTIPLE_SINGLETON_INSTANCE);
  }
  return Promise.resolve(firestore);
}

module.exports = { getFirestoreInstance };
