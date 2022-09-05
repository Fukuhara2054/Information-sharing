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

      <div>
        <Button type="submit" variant="outlined" onClick={handleLogout}>
            ログアウト
          </Button>
      </div>
      <div>
        <Post />
      </div>
    </div>
  );
};

export default Home;
