const accountSid = process.env.AC9e18b3c23d96554a3efc11548f3fdb30;
const accountAuth = process.env.dac2192a6cb58cad50d02f548cdc9c03;
const client = require('twilio')(accountSid, accountAuth);

client.messages
    .create({
        body:'OYOYOYOYOYO',
        from: '+14696091885',
        to: '+37369328944'
    })
    .then(message => console.log(message.sid));
