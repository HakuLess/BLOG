import { auth } from '../firebase.js'
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, getIdTokenResult, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const provider = new GoogleAuthProvider()

async function login(){
  return signInWithPopup(auth, provider)
}

async function logout(){
  return signOut(auth)
}

function onUserChanged(cb){
  return onAuthStateChanged(auth, cb)
}

async function isAdmin(){
  const user = auth.currentUser
  if(!user) return false
  const token = await getIdTokenResult(user)
  return token.claims && token.claims.admin === true
}

async function loginWithEmail(email, password){
  return signInWithEmailAndPassword(auth, email, password)
}

async function registerWithEmail(email, password){
  return createUserWithEmailAndPassword(auth, email, password)
}

export default { auth, login, logout, onUserChanged, isAdmin, loginWithEmail, registerWithEmail }