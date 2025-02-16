import admin from 'firebase-admin';
import firebaseConfig from '../firebaseConfig.json';
import { Data, DataList } from '../types/list-data';

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig as admin.ServiceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = admin.database();

export class FirebaseRepository {
  private extractions = db.ref('extractions');

  async saveExtractions(token: string, data: any): Promise<void> {
    const requestRef = this.extractions.child('requests').child(token);
    await requestRef.push({ timestamp: Date.now(), data });
  }

  async listExtractions(token: string): Promise<DataList> {
    const snapshot = await this.extractions
      .child('requests')
      .child(token)
      .limitToLast(20)
      .once('value');
    return snapshot.val();
  }

  async getRecentRequests(token: string, timeWindow: number): Promise<Data> {
    const now = Date.now();
    const snapshot = await this.extractions
      .child('requests')
      .child(token)
      .orderByChild('timestamp')
      .startAt(now - timeWindow)
      .once('value');

    return snapshot.val();
  }
}
