import { app } from "./firebase"
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "next/router"
import { Button } from "@mui/material"
import { css } from "@emotion/react"

const Home = () => {
  const router = useRouter()
  const auth = getAuth(app)
  const handleLogout = async () => {
    await signOut(auth)
    await router.push("/about")
}

  
    return (
      <div>
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
            margin-top: 16px;
          `}
        >
          <Button type="submit" variant="outlined" onClick={handleLogout}>
            ログアウト
          </Button>
        </div>
      </div>
    );
  }


export default Home;