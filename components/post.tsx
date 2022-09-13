import { FC, useState, useEffect } from "react";
import styles from "../styles/Post.module.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { pink } from '@mui/material/colors';
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import {db} from "../components/fire/fire"
import { collection, getDocs } from 'firebase/firestore';
import dayjs from 'dayjs';

const Post: FC = () => {
  //これはなんだろう（福原）
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  //詳細などの開閉処理
  // const update_honbun = () => {
  //   const target1 = document.getElementById("honbun");
  //   if (target1.style.display == "block") {
  //     target1.style.display = "none";
  //   } else {
  //     target1.style.display = "block";
  //   }
  // };

  const [data, setData] = useState([])

  useEffect(() => {
    const postData = collection(db, "postData")
    getDocs(postData).then((snapshot)=>{
       setData(snapshot.docs.map((doc)=> doc.data()))
       console.log(data);
    })

},[])



  //詳細などの開閉処理の問題を解決しました。
  const [open, setOpen] = useState(styles.display1)
  
  const onClick = () => {
    if(open == styles.display1){
      setOpen(styles.display2)
    }else{
      setOpen(styles.display1)
    }
  }

  return ( 
      <div>
        {data.map((dat, key) => (
          <ul key={key}>
            <div className={styles.box2}>
              <div className={styles.main}>
              {/* お気に入りボタン */}
              <Checkbox
                {...label}
                icon={<StarBorderIcon />}
                checkedIcon={<StarIcon />}
                sx={{
                  color: pink[600],
                  '&.Mui-checked': {
                    color: pink[500],
                  },
                }}
                className={styles.okiniiri}
              />
                <div className={styles.abc}>
                  <h2>
                    命題：{dat.title}
                    {/* 開閉ボタン */}
                    <Checkbox
                      {...label}
                      icon={<ExpandMoreIcon />}
                      checkedIcon={<ExpandLessIcon />}
                      onClick={onClick}
                    />
                  </h2>
                </div>
                <div id="honbun" className={open}  >
                  {/* <p className={styles.uta}>詳細:</p>
                    <p>
                      現在研修に入っている全員が参加対象です場所はGATE5階セミナールームですが、オンラインでも参加可能です。
                    </p> */}
                  <label htmlFor="">詳細：{dat.detail}</label>
                  <div className={styles.link}>
                    <Link href="page2">編集</Link>
                  </div>
                </div>
                <div>
                  <p>回答者: {dat.answerUser}　記載者:{dat.writeUser}　時間：{dayjs(dat.time.toDate()).format('YYYY/MM/DD HH:mm')}</p>
                </div>
              </div>
            </div>
          </ul> 
        ))}
      </div>
  );
};

export default Post;
