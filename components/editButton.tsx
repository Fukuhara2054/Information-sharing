import * as React from "react";
import { FC, useState, useEffect } from "react";
import { db } from "./fire/fire";
import { collection, addDoc, query, where } from "firebase/firestore";
import { doc, setDoc, getDocs, getDoc } from "firebase/firestore";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import styles from "../styles/Add.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import { Button, IconButton, Collapse, Alert } from "@mui/material";
import EditText from "./EditText";

const EditButton: FC = () => {
  const [title, setTitle] = useState(""); //命題・質問
  const [content, setContent] = useState(""); // 詳細・内容
  const [questioner, setQuestioner] = useState(""); //質問者
  const [answer, setAnswer] = useState(""); //回答者
  const [pass, setPass] = useState(false);

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
  const handleClickAddButton = () => {
    const ref = collection(db, "users", "xz25R8RJn4dRgTnQb6rp", "info");
    setDoc(doc(ref), {
      title: title,
      content: content,
      questioner: questioner,
      answer: answer,
    });
  };
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.Add}>
      <IconButton onClick={openModal} className={styles.textbtn}>
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
                    className={styles.alertcancel}
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
