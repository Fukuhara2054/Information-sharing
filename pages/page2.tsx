import type { NextPage } from 'next'
import React from "react";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Layout } from '../components/Layout'
import QuestionPost from "../components/questionPost";



const Page2: NextPage = () => {
  return (
    <div className="">
      <Layout title='質問箱'>
        <div>
          <div>
            <QuestionPost />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Page2;