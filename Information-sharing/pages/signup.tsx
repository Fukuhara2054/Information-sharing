import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { auth } from '../utils/firebase'

const SignUp: FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      user && router.push('/')
    })
  }, [])

  const createUser = async (e: any) => {
    e.preventDefault()
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      await auth.currentUser.sendEmailVerification()
      router.push('/sent')
    } catch (err: any) {
      alert(err.message)
    }
  }

  return (
    <div>
      <form onSubmit={createUser}>
        <div>
          <label htmlFor="email">
            Email:{' '}
          </label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">
            Password:{' '}
          </label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">
          SignUp
        </button>
      </form>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
  )
}

export default SignUp