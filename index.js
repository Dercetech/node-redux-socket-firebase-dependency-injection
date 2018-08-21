// NPM dependencies
const Promise = require('bluebird');

// Main start script
const server = require('./main');

// Dependencies declarations
const firestoreDep = require('./services/firebase').getFirestoreInstance();

// Start server with dependency injection \(°Ω°)/
Promise.all([firestoreDep]).then(([firestore]) => server({ firestore }));
