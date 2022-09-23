import { FC, useState, useEffect, SetStateAction } from "react";
import {app, db} from '../components/fire/fire'
import { collection, addDoc, query, where, serverTimestamp, collectionGroup, increment, updateDoc } from "firebase/firestore";
import { doc, setDoc, getDocs, getDoc } from "firebase/firestore";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/Add.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import { getAuth } from "firebase/auth";

type props = {
  dtitle: JSX.Element
  dcontent: JSX.Element
  did: string
  duserID: string
  dquestioner: JSX.Element
  danswer: JSX.Element
  
}

const Add: FC<props> = (props) => {
  const { dtitle, dcontent, did, duserID, dquestioner, danswer } = props
  const [title, setTitle] = useState('') //命題・質問
  const [content, setContent] = useState('')// 詳細・内容
  const [questioner, setQuestioner] = useState('')//質問者
  const [answer, setAnswer] = useState('')//回答者
  const [pass, setPass] = useState(false)
  
  const changeContent = (e) =>{
    setContent(e.target.value)
  }

  // useEffect(() => {
  //   if(path == '/'){
  //     setPass(true)
  //   }
  // },[])
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

//質問に対する回答ボタン
  const handleClickAddButton = async() => {
    //回答数をカウントする処理
    const ansRef = doc(db,"users",duserID,"ques", did,)
    await updateDoc(ansRef,{
      count: increment(1)
    })
    //回答ボタン処理
    const auth = getAuth(app)
    const ref = collection(db, "users", duserID,"ques", did, "ans")
    await addDoc(ref, {
      content: content,
      // 投稿者を任意で指定するには一つ目を、指定しない場合は二つ目を
      // questioner: auth.currentUser?.displayName,

      //これはソートするときのため
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
        回答する
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
        <div className={styles.textsection}>
            <h2>質問：{dtitle}</h2>   
            <h2>内容：{dcontent}</h2>
            <br></br>
          <h2>
            回答：
            <TextField
              
              id="outlined-multiline-static"
              label="投稿内容"
              multiline
              rows={6}
              className={styles.detail}
              onChange={changeContent}
            />
          </h2>
        </div> 
        {/* ↓後でonclick変える */}
        <div className={styles.button}>
          <Button
            variant="contained"
            color="success"
            className={styles.addbutton}
            onClick={handleClickAddButton}
          >
            回答
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