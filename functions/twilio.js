const twilio = require('twilio');


const accountSid = 'ACf7443983fdc8b422b4a190f8d7af5a30';
const authToken = 'b220205e184c3fd9f3bafa1b42be3840';


module.exports = new twilio.Twilio(accountSid, authToken);