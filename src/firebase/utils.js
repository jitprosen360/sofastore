import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useRef } from 'react';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
export  const auth = firebase.auth();
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();

GoogleProvider.setCustomParameters({ prompt: 'select_account' });


export default {  firestore, auth ,firebase }


export const handleUserProfile=async({userAuth,additionalData}) => {
    if(!userAuth) return;
    const {uid} = userAuth;

    const userRef = firestore.doc(`users/${uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const timestamp = new Date();
        const userRoles = ['user'];
        try{
            await userRef.set({
                displayName,
                email,
                createdDate:timestamp,
                userRoles,
                ...additionalData
            })
        } catch(err){

        }
    }
    return userRef;
}  

export const getCurrentUser = () => {
    return new Promise((resolve,reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    })
}