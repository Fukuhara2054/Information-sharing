import db from "./firebase"
import React, { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"

const Conect = () => {
    const [posts, setPosts] = useState([])
  useEffect(() => {
    const postData = collection(db, "posts")
    getDocs(postData).then((snapShot) => {
      //console.log(snapShot.docs.map((doc) => ({ ...doc.data( )})))
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data( )})))
    })

  }, [])

  posts.map((post) => {
    return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </div>
    );
  })

   
}

export default Conect;