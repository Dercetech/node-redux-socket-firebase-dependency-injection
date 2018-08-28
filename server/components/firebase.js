const Firestore = require('@google-cloud/firestore');

module.exports = function factory(ENV) {
  // Obtain config
  const { projectId, keyFilename } = ENV.firebase;
  const firestoreConfig = ENV.firebase.firestore;

  // Firestore setup
  const firestore = new Firestore({ projectId, keyFilename });
  firestore.settings(firestoreConfig);

  return { firestore };
};
