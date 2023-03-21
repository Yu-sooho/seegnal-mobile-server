const functions = require('firebase-functions');
const jwt = require('jsonwebtoken');

const signin = {
    tokenLogin : functions.https.onRequest(async (req, res) => {
      //accessToken,idToken
      const accessToken = req?.query?.accessToken;
      const idToken = req?.query?.idToken
      res.json(accessToken,idToken)
    }),
}

module.exports = signin
