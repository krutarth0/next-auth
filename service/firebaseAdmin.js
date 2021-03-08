
import * as firebaseAdmin from 'firebase-admin';

var serviceAccount = require("./admin-secret.json");


if(!firebaseAdmin.apps.length){
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "https://fir-auth-b1ee0.firebaseio.com"
  });
}

export default firebaseAdmin