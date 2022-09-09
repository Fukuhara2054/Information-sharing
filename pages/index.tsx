import type { NextPage } from "next";
import InfoPost from "../components/infoPost";
import { app } from "../components/fire/fire"
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "next/router"
import { Button } from "@mui/material"
import { Layout } from "../components/Layout";

const Home: NextPage = () => {

  const router = useRouter()
  const auth = getAuth(app)
  const handleLogout = async () => {
    await signOut(auth)
    await router.push("/login")
  }

  return (
    <Layout title='共有事項'>
    <div>
      <p>{auth.currentUser?.displayName}でログイン中</p>
      <div>
        <InfoPost />
      </div>
      <div>
        <Button type="submit" variant="outlined" onClick={handleLogout}>
            ログアウト
          </Button>
      </div>
    </div>
    </Layout>
  );
};

export default Home;
