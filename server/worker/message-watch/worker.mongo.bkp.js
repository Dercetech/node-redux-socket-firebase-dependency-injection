var Db = require('mongodb').Db,
  MongoClient = require('mongodb').MongoClient,
  Server = require('mongodb').Server,
  ReplSetServers = require('mongodb').ReplSetServers,
  ObjectID = require('mongodb').ObjectID,
  Binary = require('mongodb').Binary,
  GridStore = require('mongodb').GridStore,
  Grid = require('mongodb').Grid,
  Code = require('mongodb').Code,
  //   BSON = require('mongodb').pure().BSON,
  assert = require('assert');

// Set up the connection to the local db
MongoClient.connect(
  'mongodb://jem:password1@ds125372.mlab.com:25372/mc-tuto-1',
  { useNewUrlParser: true },
  function(err, db) {
    if (err) {
      console.error('[MessageWatch] > Mongo connection > ', err);
    } else {
      console.log('[MessageWatch] > Mongo connection > ', 'success');
    }

    // test.equal(null, err);
    // test.ok(db != null);

    // db.collection('replicaset_mongo_client_collection').update({ a: 1 }, { b: 1 }, { upsert: true }, function(
    //   err,
    //   result
    // ) {
    //   test.equal(null, err);
    //   test.equal(1, result);

    //   db.close();
    //   test.done();
    // });
  }
);
