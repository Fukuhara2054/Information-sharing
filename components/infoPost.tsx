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
} from "firebase/firestore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { Edit, EditAttributesTwoTone } from "@mui/icons-material";
import EditButton from "./editButton";
import { db } from "./fire/fire";
import Checkboxx from "./checkbox";
import dayjs from "dayjs";
import { Paper, IconButton, InputBase } from "@mui/material";
import { app } from "./fire/fire";
import { getAuth, signOut } from "firebase/auth";

const Post: FC = () => {
  //これはなんだろう（福原）
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  //詳細などの開閉処理の問題を解決しました。
  const [open, setOpen] = useState(styles.display1);

  const onClick = () => {
    if (open == styles.display1) {
      setOpen(styles.display2);
    } else {
      setOpen(styles.display1);
    }
  };
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

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
          <ul key={dat.id}>
            <div className={styles.box2}>
              <div className={styles.main}>
                <div className={styles.link}>
                  { auth.currentUser?.displayName === dat.questioner ? (
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
                  <Checkboxx
                    id={dat.id}
                    onMark={styles.bookmark1}
                    check={true}
                  />
                </div>
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
                <div id="honbun" className={open}>
                  {/* <p className={styles.uta}>詳細:</p>
                  <p>
                    現在研修に入っている全員が参加対象です場所はGATE5階セミナールームですが、オンラインでも参加可能です。
                  </p> */}
                  <label htmlFor="">詳細: {dat.content} </label>
                  {/* <button onClick={() => deleteDat(dat.id)}>削除</button> */}
                </div>
                <div>
                  <p>
                    回答者: {dat.answer} 記載者: {dat.questioner}{" "} タグ: {dat.tag}
                    {dayjs(dat.Timestamp.toDate()).format("YYYY/MM/DD HH:mm") }
                  </p>
                </div>
              </div>
            </div>
          </ul>
        ) : (
          <ul key={dat.id}>
            <div className={styles.box2}>
              <div className={styles.main}>
                <div className={styles.link}>
                { auth.currentUser?.displayName === dat.questioner ? (
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
                  <Checkboxx
                    id={dat.id}
                    onMark={styles.bookmark2}
                    check={false}
                  />
                </div>
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
                <div id="honbun" className={open}>
                  {/* <p className={styles.uta}>詳細:</p>
                  <p>
                    現在研修に入っている全員が参加対象です場所はGATE5階セミナールームですが、オンラインでも参加可能です。
                  </p> */}
                  <label htmlFor="">詳細: {dat.content} </label>
                  {/* <button onClick={() => deleteDat(dat.id)}>削除</button> */}
                </div>
                <div>
                  <p>
                    回答者: {dat.answer} 記載者: {dat.questioner}{" "} タグ: {dat.tag}
                    {dayjs(dat.Timestamp.toDate()).format("YYYY/MM/DD HH:mm")}
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
