import { auth } from '../firebase.js'
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, getIdTokenResult } from 'firebase/auth'

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

export default { auth, login, logout, onUserChanged, isAdmin }