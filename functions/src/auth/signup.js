const functions = require('firebase-functions');
const jwt = require('jsonwebtoken');

const signup = {
  kakaoRegist : functions.https.onRequest(async (req, res) => {
    //accessToken,idToken
    const accessToken = req?.query?.accessToken;
    const idToken = req?.query?.idToken
    res.json(accessToken,idToken)
  }),
  
  appleRegist : functions.https.onRequest(async (req, res) => {
    //identityToken, nonce
    const identityToken = req?.query?.identityToken;
    res.json(identityToken)
  }),
  
  googleRegist : functions.https.onRequest(async (req, res) => {
    //idToken
    console.log(req?.body,'FUFU')
    const idToken = req?.query?.idToken;
    res.json(idToken)
  })
}

module.exports = signup
