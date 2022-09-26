import { FC, useState, useEffect } from "react";
import styles from "../styles/Post.module.scss";
import {
  collectionGroup,
  getDocs,
  where,
  orderBy,
  query,
  deleteDoc,
  doc,
  collection,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { Edit, EditAttributesTwoTone } from "@mui/icons-material";
import EditButton from "./editButton";
import { db } from "./fire/fire";
import Like from "./like";
import dayjs from "dayjs";
import { Paper, IconButton, InputBase } from "@mui/material";
import { app } from "./fire/fire";
import { getAuth, signOut } from "firebase/auth";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
}));

const Post: FC = () => {
  //これはなんだろう（福原）
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  //詳細などの開閉処理の問題を解決しました。
  // const [open, setOpen] = useState(styles.display1);

  
  // const onClick = () => {
  //   if (open == styles.display1) {
  //     setOpen(styles.display2);
  //   } else {
  //     setOpen(styles.display1);
  //   }
  // };
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const [saved, setSaved] = useState(false)

  const bookmark = async(id, title, content, Timestamp, questioner, answer) => {
    if(saved === false){
      setSaved(true)
      const savedPosts = ({ questioner, content, answer, title, id, Timestamp, data: "info",bookmark: true});
      const ref = doc(db, "user", auth.currentUser?.uid, "bookmark", id);
      await setDoc(ref, savedPosts);
      console.log(savedPosts)
    } else {
      setSaved(false)
      const b = doc(db, 'user', auth.currentUser?.uid, 'bookmark', id);

      await deleteDoc(b);
    }
    
  }


  useEffect(() => {
    const postData = collectionGroup(db, "info");
    const q = query(
      postData,
      orderBy("Timestamp", "desc")
      // // , where('title', '==', '研修3')
    );
    getDocs(q).then((snapshot) => {
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setData2(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //コンソールで確認のため
      //  console.log(data);
    });
  }, []);
  const [inputValue, setInputValue] = useState("");
  //console.log(dataList)

  const search = (value: string) => {
    if (value !== "") {
      const filteredList = data2.filter((dat: string) =>
        Object.values(dat).some(
          (item: string) =>
            item
              ?.toString()
              .toUpperCase()
              .indexOf(value.trim().toUpperCase()) !== -1
        )
      );
      setData(filteredList);
      return;
    }

    setData(data2);
    return;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    search(e.target.value);
    console.log(e.target.value);
  };

  const auth = getAuth(app);

  return (
    <div>
      <div className={styles.searchbtn}>
        <Paper
          component="form"
          //影
          elevation={3}
          sx={{
            p: "0px 2px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: 35,
            borderRadius: "15px",
            marginLeft: "10px",
          }}
        >
          <IconButton sx={{ p: "4%" }} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase
            type="text"
            value={inputValue}
            onChange={handleChange}
            sx={{ flex: 1 }}
            placeholder="検索"
            inputProps={{ "aria-label": "search" }}
          />
        </Paper>
      </div>
      {data.map((dat) =>
        dat.bookmark ? (
          <ul key={dat.id} className={styles.contentbox}>
            <div className={styles.box2}>
              <div className={styles.main}>
                <div className={styles.link}>
                  {auth.currentUser?.displayName === dat.questioner ? (
                    <EditButton
                      dtitle={dat.title}
                      dcontent={dat.content}
                      did={dat.id}
                      duserID={dat.userID}
                      dquestioner={dat.questioner}
                      danswer={dat.answer}
                      dtag={dat.tag}
                    />
                  ) : (
                    <></>
                  )}
                  {/* お気に入りボタン */}
                  <Like
                    id={dat.id}
                    onMark={styles.bookmark1}
                    check={true}
                    userID={dat.userID}
                  />
                </div>
                <Accordion>
                  <AccordionSummary
                    //↓スタイルの適用が難しいから後回し
                    //expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h2 className={styles.title}>
                      命題: {dat.title}
                      {/* 開閉ボタン */}
                      {/* <Checkbox
                      {...label}
                      icon={<ExpandMoreIcon />}
                      checkedIcon={<ExpandLessIcon />}
                      onClick={onClick}
                    /> */}
                    </h2>
                  </AccordionSummary>
                  <AccordionDetails>
                  <div id="">
                      <label htmlFor="">詳細: {dat.content} </label><br></br>
                      <br></br>
                      <br></br>
                      <label htmlFor="">回答者: {dat.answer} 記載者: {dat.questioner}</label><br></br>
                      {/* <button onClick={() => deleteDat(dat.id)}>削除</button> */}
                    </div>
                  </AccordionDetails>
                </Accordion>
                <div className={styles.bottomtext}>
                  <p>
                  {dayjs(dat.Timestamp.toDate()).format("MM月DD日 HH:mm")}
                  </p>
                  <p>
                   タグ:{dat.tag}
                  </p>
                </div>
              </div>
            </div>
          </ul>
        ) : (
          <ul key={dat.id} className={styles.contentbox}>
            <div className={styles.box2}>
              <div className={styles.main}>
                <div className={styles.link}>
                  {auth.currentUser?.displayName === dat.questioner ? (
                    <EditButton
                      dtitle={dat.title}
                      dcontent={dat.content}
                      did={dat.id}
                      duserID={dat.userID}
                      dquestioner={dat.questioner}
                      danswer={dat.answer}
                      dtag={dat.tag}
                    />
                  ) : (
                    <></>
                  )}
                  {/* お気に入りボタン */}
                  <Like
                    id={dat.id}
                    onMark={styles.bookmark2}
                    check={false}
                    userID={dat.userID}
                  />
                </div>
                <Accordion>
                  <AccordionSummary
                    //↓スタイルの適用が難しいから後回し
                    //expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h2 className={styles.title}>
                      命題: {dat.title}
                      {/* 開閉ボタン */}
                      {/* <Checkbox
                      {...label}
                      icon={<ExpandMoreIcon />}
                      checkedIcon={<ExpandLessIcon />}
                      onClick={onClick}
                    /> */}
                    </h2>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div id="">
                      <label htmlFor="">詳細: {dat.content} </label><br></br>
                      <br></br>
                      <br></br>
                      <label htmlFor="">回答者: {dat.answer} 記載者: {dat.questioner}</label><br></br>
                      {/* <button onClick={() => deleteDat(dat.id)}>削除</button> */}
                    </div>
                  </AccordionDetails>
                </Accordion>
                <div className={styles.bottomtext}>
                  <p>
                   タグ:{dat.tag}
                  </p>
                  <p>
                  {dayjs(dat.Timestamp.toDate()).format("MM月DD日 HH:mm")}
                  </p>
                </div>
              </div>
            </div>
          </ul>
        )
      )}
    </div>
  );
};

export default Post;
