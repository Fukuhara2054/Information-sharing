import { FC } from 'react'
import styles  from '../styles/Add.module.scss'
import TextField from "@mui/material/TextField";

const InfoText: FC = () =>{
    return(
        <div className={styles.textsection}>
          <h2>
            命題　：
            <TextField
              id="outlined-basic"
              label="タイトル"
              variant="outlined"
              className={styles.input}
            />
          </h2>

          <h2>
            投稿者：
            <TextField
              id="outlined-basic"
              label="名前"
              variant="outlined"
              className={styles.input}
            />
          </h2>

          <h2>
            回答者：
            <TextField
              id="outlined-basic"
              label="回答者名"
              variant="outlined"
              className={styles.input}
            />
          </h2>

          <h2>
            詳細　：
            <TextField
              id="outlined-multiline-static"
              label="投稿内容"
              multiline
              rows={6}
              className={styles.detail}
            />
          </h2>
        </div> 
    )
}
export default InfoText