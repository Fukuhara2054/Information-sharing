import type { NextPage } from 'next'
import React from "react";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Layout } from '../components/Layout'
import QuestionPost from "../components/questionPost";
import styles from "../styles/Post.module.scss";
import Add from "../components/add";


const Page2: NextPage = () => {
  return (
    <div className="">
      <Layout title='質問箱'>
        <></>
      </Layout>
    </div>
  )
}

export default Page2;

//質問箱の投稿コンポーネント

// <div className={styles.appbarbottom}>
// <Add path='page2' />
// </div> 