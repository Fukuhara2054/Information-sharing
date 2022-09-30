import { FC, useEffect, useState } from "react";
import styles from "../styles/Post.module.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Like from "./like";
import Button from "@mui/material/Button";
import Link from "next/link";
import AnswerModal from "./answerModal";
import Add from "../components/add";
import {
  collectionGroup,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  collection,
  where,
} from "firebase/firestore";
import { app, db } from "./fire/fire";
import { Bookmark } from "@mui/icons-material";
import dayjs from "dayjs";
import { getAuth } from "firebase/auth";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

type value = {
  value: string
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
}));

const Post: FC<value> = ({ value }) => {
  //これはなんだろう（福原）
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const auth = getAuth(app);
  //詳細などの開閉処理
  // const update_honbun = () => {
  //   const target1 = document.getElementById("honbun");
  //   if (target1.style.display == "block") {
  //     target1.style.display = "none";
  //   } else {
  //     target1.style.display = "block";
  //   }
  // };

  const [saved, setSaved] = useState(false);

  const bookmark = async (
    id,
    title,
    content,
    Timestamp,
    questioner,
    answer
  ) => {
    if (saved === false) {
      setSaved(true);
      const savedPosts = {
        questioner,
        content,
        answer,
        title,
        id,
        Timestamp,
        data: "info",
      };
      const ref = doc(db, "user", auth.currentUser?.uid, "bookmark", id);
      await setDoc(ref, savedPosts);
      console.log(savedPosts);
    } else {
      setSaved(false);
      const b = doc(db, "user", auth.currentUser?.uid, "bookmark", id);

      await deleteDoc(b);
    }
  };

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
  const [ansData, setAnsData] = useState([]);
  //const [show, setShow] = useState([])
  useEffect(() => {

    if (value == '1') {
      const postData = collectionGroup(db, "ques");
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
    } else {
      const postData = collectionGroup(db, "ques");
      const q = query(
        postData,
        orderBy("Timestamp", "desc"),
        where('count', '==', '0')
      );
      getDocs(q).then((snapshot) => {
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setData2(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        //コンソールで確認のため
        //  console.log(data);
      });

    }
    //回答表示
    // const ansData = collectionGroup(db,"ans")
    // const a = query(ansData, orderBy('Timestamp', 'desc')
    // )
    // getDocs(a).then((snapshot)=>{
    //     setAnsData(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))
    // })
  }, []);
  //回答表示ボタン
  const handleClickShowButton = (userID, id) => {
    const ref = collection(db, "users", userID, "ques", id, "ans");
    getDocs(ref).then((snapshot) => {
      setAnsData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  //質問削除ボタン
  const handleClickDeleteButton = async (userID, id) => {
    await deleteDoc(doc(db, "users", userID, "ques", id));
    window.location.reload();
  };

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

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const AccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <div className={styles.searchbtn_q}>
        <Paper
          component="form"
          //影
          elevation={3}
          sx={{
            position: "absolute",
            top: "10px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: 35,
            borderRadius: "15px",
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
      <div className={styles.appbarbottom}>
          <Add path='page2' fuku='質問投稿'/>
        </div>
      {data.map((dat) => (
        <ul key={dat.id} className={styles.contentbox}>
          <div className={styles.box2}>
            <div className={styles.main}>
              <div className={styles.link}>
                <div className={styles.watch}>
                  {/* <p>いいね：1</p> */}
                  <p>回答数：{dat.count}</p>
                </div>
                {/* お気に入りボタン */}
              </div>
              <Accordion>
                <AccordionSummary
                  //↓スタイルの適用が難しいから後回し
                  //expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className={styles.QStext}>
                    <h2 className={styles.title}>質問:{dat.title}</h2>
                    {/* 開閉ボタン */}
                    {/* <Checkbox
                    {...label}
                    icon={<ExpandMoreIcon />}
                    checkedIcon={<ExpandLessIcon />}
                    onClick={onClick}
                  /> */}
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div id="honbun">
                    <div>
                      <label htmlFor="">内容:{dat.content} </label>
                      <div className={styles.link}>
                        {/* <AnswerButton
                                 dcontent = {dat.content}
                                 did = {dat.id}
                                 /> */}
                      </div>
                    </div>
                    <div>
                      {ansData.map((dat) => (
                        <ul key={dat.id} className={styles.contentbox}>
                          <label htmlFor="">
                            A.{dat.content}{" "}
                            {dayjs(dat.Timestamp.toDate()).format(
                              "YYYY/MM/DD HH:mm"
                            )}
                          </label>
                        </ul>
                      ))}
                      {/* 回答が複数の時のためにコンポーネントにする必要がある */}
                      <label>
                        <h2>
                          {/*質問:{dat.title}*/}
                          {/* 開閉ボタン */}
                          <button
                            onClick={() =>
                              handleClickShowButton(dat.userID, dat.id)
                            }
                          >
                            ほかの回答を見る↑
                          </button>
                        </h2>
                      </label>
                    </div>
                    {auth.currentUser?.uid === dat.userID ? (
                      <div className={styles.block}>
                        <div>あなたの投稿</div>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() =>
                            handleClickDeleteButton(dat.userID, dat.id)
                          }
                        >
                          削除
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <AnswerModal
                          dcontent={dat.content}
                          did={dat.id}
                          duserID={dat.userID}
                          dtitle={dat.title}
                          dquestioner={undefined}
                          danswer={undefined}
                        />
                      </div>
                    )}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </ul>
      ))}

    </div>
  );
};

export default Post;
