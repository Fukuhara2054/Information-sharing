import React, { useState } from "react"
import { useRouter } from "next/router"
import { GoogleAuthProvider } from "firebase/auth";
import { Alert, Button, Snackbar } from "@mui/material"
import { getAuth, signInWithRedirect, setPersistence, browserSessionPersistence } from "firebase/auth"
import { app } from "./firebase"
import {useAuthState} from 'react-firebase-hooks/auth'

const Login = () => {
  const auth = getAuth(app)
  const [ user ] = useAuthState(auth)
  const isLoggedIn = !!user
  const router = useRouter()
  const provider = new GoogleAuthProvider();
  const handleLogin = () => {
    setPersistence(auth, browserSessionPersistence)
    .then(() => {
     
      return signInWithRedirect(auth, provider);
    })
    router.push('/');
  }
  const handleClose = async () => {
    await router.push("/")
  }

  return (
    <div>
      <Snackbar
        open={isLoggedIn}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        key={"top" + "center"}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning">
          すでにログインしています
        </Alert>
      </Snackbar> 
      <Snackbar
        open={!isLoggedIn}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        key={"top" + "center"}
      >
        <Alert severity="warning">ログインしてください</Alert>
      </Snackbar>
      <h2>Googleアカウント</h2>
      <Button variant="outlined" onClick={handleLogin}>
          ログイン
      </Button>
    </div>
  )
}


export default Login