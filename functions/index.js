const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json')
const createUser = require('./create_user');
const reqOneTimePass = require('./request_one_time_pass');
const verifyOtp = require('./verify_otp');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://opt-practise.firebaseio.com"
  });

exports.createUser = functions.https.onRequest(createUser);


exports.reqOneTimePass = functions.https.onRequest(reqOneTimePass);
exports.verifyOtp = functions.https.onRequest(verifyOtp); 