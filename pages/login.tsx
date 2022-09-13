import { useRouter } from "next/router";
import { GoogleAuthProvider } from "firebase/auth";
import { Alert, Button, Snackbar } from "@mui/material";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import  { app } from "../components/fire/fire";
import { useAuthContext } from "./context/AuthContext";
import styles from "../styles/Login.module.scss";
import GoogleIcon from '@mui/icons-material/Google';


const Login = () => {
  const auth = getAuth(app);
  const { user } = useAuthContext();
  const isLoggedIn = !!user;
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setPersistence(auth, browserSessionPersistence).then(() => {
      return signInWithPopup(auth, provider);
    });
    router.push("/");
  };
  const handleClose = async () => {
    await router.push("/");
  };

  return (
    <div className={styles.login}>
      <div className={styles.sideimage}>
        <a>OneLink</a>
        <img src="/Logo.png" />
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
          <Alert severity="warning">ログインしてください</Alert>
        </Snackbar>
        <h2 className={styles.title}>ひとつに繋がる</h2>
        <h3 className={styles.subtitle}>OneLinkで情報を見つけよう</h3>
        {/* <h2>Googleアカウント</h2> */}
        <Button variant="contained" className={styles.loginbtn} onClick={handleLogin}>
        <GoogleIcon className={styles.icon} />
          Googleでログイン
        </Button>
      </div>
    </div>
  );
};

export default Login;
