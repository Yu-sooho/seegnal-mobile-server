// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const authStore = require('./src')

//회원가입
exports.kakaoRegist = authStore.signup.kakaoRegist
exports.googleRegist = authStore.signup.googleRegist
exports.appleRegist = authStore.signup.appleRegist

//로그인
exports.tokenLogin = authStore.signin.tokenLogin