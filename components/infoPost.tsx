import { FC, useEffect, useState } from "react";
import styles from "../styles/Post.module.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { pink } from '@mui/material/colors';
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import dayjs from "dayjs"
import { collectionGroup, getDocs, where, orderBy, query, deleteDoc, doc, collection, getDoc, setDoc } from "firebase/firestore";
import {db} from "./fire/fire";
import { app } from "../components/fire/fire"
import { getAuth, signOut } from "firebase/auth"
import { Edit, EditAttributesTwoTone } from "@mui/icons-material";
import EditButton from "./editButton";

const Post: FC = () => {
  //これはなんだろう（福原）
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const auth = getAuth(app)

  //詳細などの開閉処理
  // const update_honbun = () => {
  //   const target1 = document.getElementById("honbun");
  //   if (target1.style.display == "block") {
  //     target1.style.display = "none";
  //   } else {
  //     target1.style.display = "block";
  //   }
  // };

  
  const [saved, setSaved] = useState(false)

  const bookmark = async(id, title, content, Timestamp, questioner, answer) => {
    if(saved === false){
      setSaved(true)
      const savedPosts = ({ questioner, content, answer, title, id, Timestamp});
      const ref = doc(db, "user", auth.currentUser?.uid, "bookmark", id);
      await setDoc(ref, savedPosts);
    } else {
      setSaved(false)
      const b = doc(db, 'user', auth.currentUser?.uid, 'bookmark', id);

      await deleteDoc(b);
    }
    
  }



  //詳細などの開閉処理の問題を解決しました。
  const [open, setOpen] = useState(styles.display1)
  
  const onClick = () => {
    if(open == styles.display1){
      setOpen(styles.display2)
    }else{
      setOpen(styles.display1)
    }
  }

  const [data, setData] = useState([])

  useEffect(() => {
    const postData = collectionGroup(db, "info")
    const q = query(postData, orderBy('Timestamp', 'desc')
    // // , where('title', '==', '研修3')
    )
    getDocs(q).then((snapshot)=>{
       setData(snapshot.docs.map((doc)=> ({ ...doc.data(), id: doc.id })))
       //コンソールで確認のため
      //  console.log(data);
    })
  },[])

  return (
    <div>
      {data.map((dat) => (
      <ul key={dat.id}>
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
              onClick={
                () => bookmark(dat.id, dat.title, dat.content, dat.Timestamp, dat.questioner, dat.answer)
              }
            />
            <div className={styles.abc}>
              <h2>
                命題: {dat.title}
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
              <label htmlFor="">詳細: {dat.content} </label>
              <div className={styles.link}>
                
                <EditButton
                  dtitle = {dat.title}
                  dcontent = {dat.content}
                  did = {dat.id}
                  duserID = {dat.userID}
                  dquestioner = {dat.questioner}
                  danswer = {dat.answer}

                />
              </div>
              {/* <button onClick={() => deleteDat(dat.id)}>削除</button> */}
            </div>
            <div>
              <p>回答者: {dat.answer}  記載者: {dat.questioner}  {dayjs(dat.Timestamp.toDate()).format('YYYY/MM/DD HH:mm')}</p>
            </div>
          </div>
        </div>
      </ul> 
    ))}
    </div>
  );
};

export default Post;
