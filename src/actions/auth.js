import { googleAuthProvider, firebase } from '../firebase/firebase';

export const login = (uid) => {
  return {
    type: 'LOGIN',
    uid: uid
  };
};

export const logout =() => {
  return {
    type: 'LOGOUT'
  };
}; 

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};