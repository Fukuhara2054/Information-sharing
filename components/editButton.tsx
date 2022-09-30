import * as React from "react";
import { FC, useState, useEffect } from "react";
import { db } from "./fire/fire";
import { collection, addDoc, query, where, serverTimestamp, deleteDoc } from "firebase/firestore";
import { doc, setDoc, getDocs, getDoc } from "firebase/firestore";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import styles from "../styles/Add.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import { Button, IconButton, Collapse, Alert } from "@mui/material";
import EditText from "./EditText";
import { app } from "./fire/fire"
import { getAuth, signOut } from "firebase/auth"

type props = {
  dtitle: JSX.Element
  dbookmark: boolean
  dcontent: JSX.Element
  did: string
  duserID: string
  dquestioner: JSX.Element
  danswer: JSX.Element
  dtag: JSX.Element
}

const EditButton: FC<props> = (props) => {
  const { dtitle, dcontent, did, duserID, dquestioner, danswer,dbookmark } = props
  const [title, setTitle] = useState(dtitle); //命題・質問
  const [content, setContent] = useState(dcontent); // 詳細・内容
  const [questioner, setQuestioner] = useState(dquestioner); //質問者
  const [answer, setAnswer] = useState(danswer); //回答者
  const [tag, setTag] = useState('')//タグ付け
  const [pass, setPass] = useState(false);
  const [open, setOpen] = React.useState(false);


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
  const handleClickAddButton = async () => {

    const ref = doc(db, "users", auth.currentUser?.uid, 'info', did)
    await setDoc(ref, {
      title: title,
      content: content,
      // 投稿者を任意で指定するには一つ目を、指定しない場合は二つ目を
      tag: tag,
      questioner: questioner,
      bookmark: dbookmark,
      duserID: did,
      // questioner: auth.currentUser?.displayName,
      answer: answer,
      Timestamp: serverTimestamp(),
    })

    window.location.reload()
  }

  const handleClickDeleteButton = async () => {
    await deleteDoc(doc(db, "users", auth.currentUser?.uid, "info", did))

    window.location.reload();
  }

  return (
    <div className={styles.Add}>
      <IconButton
        onClick={openModal}
        sx={{
          color: "#606060",
          padding: "0",
        }}>
        <EditIcon sx={{ color: "#9f9f9f" }} />
      </IconButton>
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
        <IconButton
          onClick={closeModal}
          sx={{
            position: "absolute",
            right: "0",
            marginRight: "10px",
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* 中身の内容部分をコンポーネントにしました（file: infoText.tsx） */}
        {/* 子コンポーネントから親コンポーネントに渡している */}
        <EditText
          setTitle={setTitle}
          setContent={setContent}
          setQuestioner={setQuestioner}
          setAnswer={setAnswer}
          setTag={setTag}
          title={title}
          content={content}
          questioner={questioner}
          answer={answer}
          tag={tag}
        />

        {/* ↓後でonclick変える */}
        <div className={styles.button}>
          <Button
            variant="contained"
            color="success"
            sx={{
              margin: "auto",
            }}
            onClick={handleClickAddButton}
          >
            保存
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              margin: "auto",
            }}
            onClick={() => {
              setOpen(true);
            }}
          >
            削除
          </Button>
          <div className={styles.alert}>
            <Collapse in={open}>
              <Alert
                severity="error"
                sx={{ height: "110px" }}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                本当に投稿を削除してもよろしいですか？
                <div className={styles.alertbtn}>
                  <Button
                    sx={{
                      backgroundColor: "#BCBCBC",
                      color: "#222222",
                      "&:hover": {
                        backgroundColor: "#9f9f9f",
                      },
                    }}
                    startIcon={<CloseIcon />}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    キャンセル
                  </Button>
                  <div className={styles.alertbtnSpace}></div>
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<CheckIcon />}
                    onClick={() => {
                      setOpen(false);
                      closeModal();
                      handleClickDeleteButton();
                    }}
                  >
                    削除します！
                  </Button>
                </div>
              </Alert>
            </Collapse>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditButton;
