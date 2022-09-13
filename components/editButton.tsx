import { FC, useState, useEffect } from "react";
import {db} from './fire/fire'
import { collection, addDoc, query, where, serverTimestamp } from "firebase/firestore";
import { doc, setDoc, getDocs, getDoc } from "firebase/firestore";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/Add.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import InfoText from "./infoText";
import QuestionText from "./questionText";
import { convertLength } from "@mui/material/styles/cssUtils";
import { ConnectingAirportsOutlined } from "@mui/icons-material";
import { Value } from "sass";//EditAttributesTwoTone
import EditText from "./EditText";
import { app } from "./fire/fire"
import { getAuth, signOut } from "firebase/auth"
import dayjs from 'dayjs';

type props = {
  dtitle: JSX.Element
  dcontent: JSX.Element
  did: JSX.Element
  duid: JSX.Element
  dquestioner: JSX.Element
  danswer: JSX.Element
}

const EditButton: FC<props> = (props) => {
  const { dtitle, dcontent, did, duid, dquestioner, danswer } = props
  const [title, setTitle] = useState(dtitle) //命題・質問
  const [content, setContent] = useState(dcontent)// 詳細・内容
  const [questioner, setQuestioner] = useState(dquestioner)//質問者
  const [answer, setAnswer] = useState(danswer)//回答者
  const [pass, setPass] = useState(false)
  

  const auth = getAuth(app)
  // アプリのルートを識別するクエリセレクタを指定する。
  Modal.setAppElement("#__next");
  const [modalIsOpen, setIsOpen] = useState(false);

  // モーダルを開く処理
  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // モーダルが開いた後の処理
  };

  // モーダルを閉じる処理
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleClickAddButton = async() => {

    const ref = doc(db, "users", auth.currentUser?.uid,'info', did)
    await setDoc(ref, {
      title: title,
      content: content,
      // 投稿者を任意で指定するには一つ目を、指定しない場合は二つ目を
      questioner: questioner,
      // questioner: auth.currentUser?.displayName,
      answer: answer,
      Timestamp: serverTimestamp(),
    })
    
    window.location.reload()
  }
  return (
    <div className={styles.Add}>
      <Button
        variant="contained"
        onClick={openModal}
        startIcon={<AddIcon />}
      >
        編集
      </Button>
      <Modal
        // isOpenがtrueならモダールが起動する
        isOpen={modalIsOpen}
        // モーダルが開いた後の処理を定義
        onAfterOpen={afterOpenModal}
        // モーダルを閉じる処理を定義
        onRequestClose={closeModal}
        //React-modalのスタイルがデフォで当てられていたので下に記述
        style={{
          overlay: {
            position: "fixed",
            //MUIのz-indexが1100に設定されているため
            zIndex: 1102,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          content: {
            position: "absolute",
            top: "60px",
            left: "200px",
            right: "200px",
            bottom: "60px",
            border: "1.5px solid #00B2FF",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        {/* モーダル内右上のバツ */}
        <IconButton onClick={closeModal} className={styles.closeicon}>
          <CloseIcon />
        </IconButton>

        {/* 中身の内容部分をコンポーネントにしました（file: infoText.tsx） */}
        {/* 子コンポーネントから親コンポーネントに渡している */}    
        <EditText
          setTitle={setTitle}
          setContent={setContent}
          setQuestioner={setQuestioner}
          setAnswer={setAnswer}
          
          title={title}
          content={content}
          questioner={questioner}
          answer={answer}
        />

        {/* ↓後でonclick変える */}
        <div className={styles.button}>
          <Button
            variant="contained"
            color="success"
            className={styles.addbutton}
            onClick={handleClickAddButton}
          >
            追加
          </Button>
          <Button
            variant="contained"
            color="error"
            className={styles.closebutton}
            onClick={closeModal}
          >
            キャンセル
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default EditButton;