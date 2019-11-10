import * as firebase from "firebase";
import 'firebase/firestore'
import { AsyncStorage } from 'react-native';

var firebaseConfig = {
    apiKey: "AIzaSyDTmM0uWK8SDEiY2rjCuFxUpbZU-wSKM_k",
    authDomain: "todo-app-277c4.firebaseapp.com",
    databaseURL: "https://todo-app-277c4.firebaseio.com",
    projectId: "todo-app-277c4",
    storageBucket: "",
    messagingSenderId: "1090813408871",
    appId: "1:1090813408871:web:20ec184e5d371e65e0c6c2"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export function signup(name, email, psw, navigation) {
    return (dispatch) => {
        dispatch({ type: 'CHANGE_LOADER' })
        firebase.auth().createUserWithEmailAndPassword(email, psw)
            .then(function (user) {
                AsyncStorage.setItem('uid', user.user.uid);
                dispatch({ type: 'SAVE_USER', payload: { name, email: user.user.email, uid: user.user.uid } })
                db.collection("users").add({
                    name,
                    email: user.user.email,
                    uid: user.user.uid,
                })
                    .then(() => {
                        dispatch({ type: 'CHANGE_LOADER' })
                        navigation.navigate('App')
                    })
                    .catch((error) => {
                        dispatch({ type: 'CHANGE_LOADER' })
                        alert(error.message)
                    })
            })
    }
}


export function signin(email, psw, navigation) {
    return (dispatch) => {
        dispatch({ type: 'CHANGE_LOADER' })
        firebase.auth().signInWithEmailAndPassword(email, psw)
            .then(function (user) {
                AsyncStorage.setItem('uid', user.user.uid);
                db.collection("users").where("uid", "==", user.user.uid).get()
                    .then(function (querySnapshot) {
                        querySnapshot.forEach(function (doc) {
                            dispatch({ type: 'SAVE_USER', payload: { name: doc.data().name, email: user.user.email, uid: user.user.uid } })
                        })
                    })
            }).then(() => {
                dispatch({ type: 'CHANGE_LOADER' })
                navigation.navigate('App')
            })
            .catch((error) => {
                dispatch({ type: 'CHANGE_LOADER' })
                alert(error.message)
            })
    }
}
