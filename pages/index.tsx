import type { NextPage } from "next";
import Post from "../components/post";

import { app } from "./firebase"
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "next/router"
import { Button } from "@mui/material"
import { css } from "@emotion/react"

const Home: NextPage = () => {

  const router = useRouter()
  const auth = getAuth(app)
  const handleLogout = async () => {
    await signOut(auth)
    await router.push("/login")
  }

  return (
    <div>
<<<<<<< HEAD
      <div>
        <Button type="submit" variant="outlined" onClick={handleLogout}>
            ログアウト
          </Button>
        <Add />
        <Search />
      </div>
      <div>
        <Post />
      </div>
=======
      <Post />
>>>>>>> 13407d25e18f559113266c26c3c34c74b6055b9a
    </div>
  );
};

export default Home;
