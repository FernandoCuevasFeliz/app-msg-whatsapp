const accountSid = process.env.ACCOUNT_ID || '##########';
const authToken = process.env.TWILIO_TOKEN || '#######';
const client = require('twilio')(accountSid, authToken);

const sendMessage = async (message, phone) => {
  const msg = {
    body: message,
    from: process.env.FROM_MSG || 'whatsapp:###########',
    to: `whatsapp:${phone}`,
  };
  const sendMsg = await client.messages.create(msg);
};

module.exports = sendMessage;
