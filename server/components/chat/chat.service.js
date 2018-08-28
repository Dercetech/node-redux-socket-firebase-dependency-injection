module.exports = function factory(firebase) {
  const { firestore } = firebase;

  const document = firestore.doc('posts/intro-to-firestore3');
  document
    .set({
      title: 'Jem was here ୧༼ಠ益ಠ༽୨',
      body: 'Hello World'
    })
    .then(() => {
      console.log('Document created successfully');
    })
    .catch(err => console.log('ERROR ', err));

  function sendMessage(message, owner) {
    const date = new Date().getTime();
    firestore
      .collection('messages')
      .add({ date, owner, message })
      .then(crap => console.log('added'))
      .catch(caca => console.error('caca ', caca));
  }

  return { sendMessage };
};
