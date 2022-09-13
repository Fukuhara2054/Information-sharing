import { Dispatch, FC, SetStateAction, useState } from 'react'
import styles  from '../styles/Add.module.scss'
import TextField from "@mui/material/TextField";
import { VaccinesTwoTone } from '@mui/icons-material';

//型指定もっといい書き方あるかも
type props = {
  setTitle: Dispatch<SetStateAction<string>>
  setContent: Dispatch<SetStateAction<string>>
  setQuestioner: Dispatch<SetStateAction<string>>
  setAnswer: Dispatch<SetStateAction<string>>

  title: JSX.Element
  content: JSX.Element
  questioner: JSX.Element
  answer: JSX.Element
}
//情報共有の時しか使わないコンポーネント
const EditText: FC<props> = (props) =>{
  const { title, content, questioner, answer } = props


  const changeTitle = (e) =>{
    props.setTitle(e.target.value)
  }
  const changeContent = (e) =>{
    props.setContent(e.target.value)
  }
  const changeQuestioner = (e) =>{
    props.setQuestioner(e.target.value)
  }
  const changeAnswer = (e) =>{
    props.setAnswer(e.target.value)
  }
  
  
  return(
        <div className={styles.textsection}>
          <h2>
            命題　：
            <TextField
              id="outlined-basic"
              label="タイトル(編集）"
              variant="outlined"
              className={styles.input}
              value={title}
              onChange={changeTitle}
              
            />
          </h2>

          <h2>
            投稿者：
            <TextField
              id="outlined-basic"
              label="名前(編集）"
              variant="outlined"
              className={styles.input}
              value={questioner}
              onChange={changeQuestioner}
              
            />
          </h2>

          <h2>
            回答者：
            <TextField
              id="outlined-basic"
              label="回答者名(編集）"
              variant="outlined"
              className={styles.input}
              value={answer}
              onChange={changeAnswer}
              
            />
          </h2>
          <h2>
            詳細　：
            <TextField
              id="outlined-multiline-static"
              label="投稿内容(編集）"
              multiline
              rows={6}
              className={styles.detail}
              value={content}
              onChange={changeContent}
              
            />
          </h2>
        </div> 
    )
}
export default EditText