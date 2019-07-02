const functions = require('firebase-functions');
const admin = require('firebase-admin');

const createUser = require('./create_user');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://opt-practise.firebaseio.com"
  });
  
exports.createUser = functions.https.onRequest(createUser);
