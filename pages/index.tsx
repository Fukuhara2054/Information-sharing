import type { NextPage } from "next";
import Post from "../components/post";
import { app } from "./firebase"
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "next/router"
import { Button } from "@mui/material"
import { Layout } from "../components/Layout";
import React from "react"

const Home: NextPage = () => {
  const router = useRouter()
  const auth = getAuth(app)
  const handleLogout = async () => {
    await signOut(auth)
    await router.push("/login")
  }

  return (
    <Layout>
    <div>
    <p>{auth.currentUser?.displayName} でログイン中</p>
      <div>
        <Post />
        <Button type="submit" variant="outlined" onClick={handleLogout}>
            ログアウト
          </Button>
      </div>
    </div>
    </Layout>
  );
};

export default Home;
