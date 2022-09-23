import * as React from "react";
import { useRouter } from "next/router";
import { GoogleAuthProvider } from "firebase/auth";
import { Alert, Button, Snackbar, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from '@mui/icons-material/Google';
import {
  getAuth,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { app } from "../components/fire/fire";
import { useAuthContext } from "../components/context/AuthContext";
import styles from "../styles/Login.module.scss";

const Login = () => {
  const auth = getAuth(app);
  const { user } = useAuthContext();
  const isLoggedIn = !!user;
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const handleLogin = (e: { preventDefault: () => void }) => {
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithPopup(auth, provider);
    });
  };
  const handleClose = async () => {
    await router.push("/");
  };
  const [open, setOpen] = React.useState(true);

  return (
    <div className={styles.login}>
      <div className={styles.sideimage}>
        <img src="/Logo_ver2.png" className={styles.logo} />
        <a className={styles.onelink1}>OneLink</a>
        <a className={styles.onelink2}>OneLink</a>
        <img src="/Satellite.png" className={styles.satellite} />
      </div>
      <div className={styles.content}>
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
          <Collapse in={open}>
            <Alert
              severity="info"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              ログインしてください
            </Alert>
          </Collapse>
        </Snackbar>
        <h2 className={styles.title}>繋げる。</h2>
        <h2 className={styles.title}>全てをひとつに。</h2>
        <h3 className={styles.subtitle}>
          OneLinkであなたに必要な情報を見つけよう！
        </h3>
        <h2 className={styles.gmtext}>Gmailアカウントでログイン</h2>
        <Button
          variant="contained"
          onClick={handleLogin}
          className={styles.loginbtn}
          startIcon={<GoogleIcon />}
        >
          ログイン
        </Button>
      </div>
    </div>
  );
};

export default Login;
