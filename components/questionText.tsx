import { Dispatch, FC, SetStateAction } from 'react'
import styles  from '../styles/Add.module.scss'
import TextField from "@mui/material/TextField";
import { VaccinesTwoTone } from '@mui/icons-material';

//型指定もっといい書き方あるかも
type props = {
  setTitle: Dispatch<SetStateAction<string>>
  setContent: Dispatch<SetStateAction<string>>
}
//情報共有の時しか使わないコンポーネント
const questionText: FC<props> = (props) =>{
  const changeTitle = (e) =>{
    props.setTitle(e.target.value)
  }
  const changeContent = (e) =>{
    props.setContent(e.target.value)
  }
  
    return(
        <div className={styles.textsection}>
          <h2>
            質問　：
            <TextField
              id="outlined-basic"
              label="タイトル"
              rows={2}
              variant="outlined"
              sx={{
                maxWidth: "85%",
                width: "100vw",
                verticalAlign: "4px",
              }}
              onChange={changeTitle}
            />
          </h2>       
          <h2>
            内容　：
            <TextField
              id="outlined-multiline-static"
              label="投稿内容"
              multiline
              rows={6}
              sx={{
                fontSize: "1vw",
                width: "85%",
                height: "200px",
              }}
              onChange={changeContent}
            />
          </h2>
        </div> 
    )
}
export default questionText