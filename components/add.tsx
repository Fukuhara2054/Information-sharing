import { FC, useState } from "react";
import db from '../components/fire/fire'
import { collection, addDoc, query, where } from "firebase/firestore";
import { doc, setDoc, getDocs, getDoc } from "firebase/firestore";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/Add.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import InfoText from "./infoText";
import { convertLength } from "@mui/material/styles/cssUtils";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

//型指定
const Add: FC = () => {
  const [title, setTitle] = useState('') //命題
  const [content, setContent] = useState('')// 詳細
  const [questioner, setQuestioner] = useState('')//質問者
  const [answer, setAnswer] = useState('')//回答者
  const [map, setMap] = useState([{}])

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



    // console.log(map)
    // const docRef = setDoc(doc(db, "users", 'V0K3WWjQJDljHDNjGFUy'), {
    //   map: {
    //     title: title,
    //     content: content,
    //     questioner: questioner,
    //     answer: answer,
    //   }

    // }
    // )
  }
  return (
    <div className={styles.Add}>
      <Button
        variant="contained"
        onClick={openModal}
        className={styles.plus}
        startIcon={<AddIcon />}
      >
        投稿
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
        <InfoText
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
            onClick={closeModal}
          >
            キャンセル
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Add;
