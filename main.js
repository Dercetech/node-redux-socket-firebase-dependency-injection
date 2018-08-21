module.exports = dependencies => {
  const { firestore } = dependencies;

  const document = firestore.doc('posts/intro-to-firestore3');
  document
    .set({
      title: 'Jem was ere ୧༼ಠ益ಠ༽୨',
      body: 'Hello World'
    })
    .then(() => {
      // Document created successfully.
    });

  if (true) {
    //require('./worker/message-watch');
  }
};
