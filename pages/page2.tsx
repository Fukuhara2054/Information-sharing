//Appbar position stickyのテスト
//後で置き換え
import  { app, db } from "../components/fire/fire";
import { getAuth, signOut } from "firebase/auth"
import type { NextPage } from 'next'
import React, { useEffect, useState, SetStateAction } from "react";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { collection, doc, setDoc } from "firebase/firestore";


const Page2: NextPage = () => {
  const auth = getAuth(app)
  const [title, setTitle] = useState('')//
  const [content, setContent] = useState('')
  const [timeStamp, setTimeStamp] = useState('')
  const [bookmark, setBookmark] = useState('')
  const onchangeTitle = ((e: { target: { value: SetStateAction<string>; }; }) => {
    setTitle(e.target.value)
  })
  const onchangeContent = ((e: { target: { value: SetStateAction<string>; }; }) => {
    setContent(e.target.value)
  })
  const onchangeTimeStamp = ((e: { target: { value: SetStateAction<string>; }; }) => {
    setTimeStamp(e.target.value)
  })
  const onchangeBookmark = ((e: { target: { value: SetStateAction<string>; }; }) => {
    setBookmark(e.target.value)
  })  
  const handleClickAddFieldButton = async() => {
    const userDataRef = collection(db, "users")//mydataRefにdbのmydataコレクションを指定
    await setDoc(doc(userDataRef, auth.currentUser?.uid),{//setdocの第二引数がドキュメント名、第三は入れたいデータ
      0:{
        title:title,
        content:content,
        questioner:auth.currentUser?.displayName, //質問者はユーザー名
        timeStamp:timeStamp,
        bookmark:bookmark,
      },
  
    })
  }
  return (
    <div className="App">
      <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6">News</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <div>
      <label>投稿</label>
      <input name="title" type="text" placeholder="命題" onChange={onchangeTitle}/>
      <input name="content" type="text" placeholder="詳細" onChange={onchangeContent}/>
      <input name="timeStamp" type="text" placeholder="投稿時間" onChange={onchangeTimeStamp}/>
      <input name="bookmark" type="text" placeholder="いいね" onChange={onchangeBookmark}/>
      <button onClick={handleClickAddFieldButton}>投稿</button>
      </div>
      
      
    
    </div>
    </div>
  )
}

export default Page2;