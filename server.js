const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
require('dotenv').config();

const MAX_ALLOWED_SESSION_DURATION = 14400;
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioApiKeySID = process.env.TWILIO_API_KEY_SID;
const twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET;

app.get('/token', (req, res) => {
  const { identity, roomName } = req.query;
  const token = new AccessToken(twilioAccountSid, twilioApiKeySID, twilioApiKeySecret, {
    ttl: MAX_ALLOWED_SESSION_DURATION,
  });
  token.identity = identity;
  const videoGrant = new VideoGrant({ room: roomName });
  token.addGrant(videoGrant);
  res.send(token.toJwt());
  console.log(`issued token for ${identity} in room ${roomName}`);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')))

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
}

const serverDevPort = 8081
const clientDevPort = 7165
const port = process.env.PORT || serverDevPort

app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${clientDevPort}` }))

app.listen(port, error => {
  if (error) throw error
  console.log('Server running on port ', port)
})
