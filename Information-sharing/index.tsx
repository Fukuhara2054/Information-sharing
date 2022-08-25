import { useEffect, FC, useState } from 'react'
import { useRouter } from 'next/router'
import {auth} from '../utils/firebase'


const Home: FC = (props: any) => {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<null | object>(null)

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      user ? setCurrentUser(user) : router.push('/login')
      //!user.emailVerified && router.push('/sent')
    })
  }, [])

  const logOut = async () => {
    try {
      await auth.signOut()
      router.push('/login')
    } catch (error:any) {
      alert(error.message)
    }
  }

  return (
    <div>
      {/*<pre>{currentUser && JSON.stringify(currentUser, null, 4)}</pre>*/}
      <button onClick={logOut}>Logout</button>
    </div>
  )
}

export default Home