import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);

interface IPlayer {
  name: string;
  phonetic: string;
  birthday: admin.firestore.Timestamp;
  profile: string;
  performances: string[];
  email: string;
  password: string;
  profilePhotoUrl: string;
  proofPhotoUrl: string;
  twitterUrl: string;
  facebookUrl: string;
  siteUrl: string;
  sportsID: string;
}

export const hookRegisterPlayer = functions.firestore.document('players/{playerId}').onCreate((snap, context) => {
  const newValue = snap.data() as IPlayer;
  console.log(newValue);
});
