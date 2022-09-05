import type { NextPage } from "next";
import Add from "../components/add";
import Post from "../components/post";
import Search from "../components/search";

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
        <Add />
        <Search />
      </div>
      <div>
        <Post />
      </div>
    </div>
  );
};

export default Home;
