import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    deleteDoc,
    onSnapshot,
    DocumentReference,
    DocumentSnapshot,
    QuerySnapshot,
    QueryDocumentSnapshot,
    DocumentData,
    FirestoreDataConverter,
    Timestamp
} from 'firebase/firestore';

import { Category } from '../../store/categories/category.types';

const firebaseConfig = {
  apiKey: "AIzaSyAIjYFdDghSvG8DqExNEQcnRWPsCapK3XM",
  authDomain: "pet-shop-33c20.firebaseapp.com",
  projectId: "pet-shop-33c20",
  storageBucket: "pet-shop-33c20.appspot.com",
  messagingSenderId: "713000414884",
  appId: "1:713000414884:web:06e8bcb0037b861fef8031"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export type ObjectToAdd = {
    title: string;
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd> (collectionKey: string, objectsToAdd: T[]): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
}

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Category);
}