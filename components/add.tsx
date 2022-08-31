import { FC, useState } from "react";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/Add.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";

const Add: FC = () => {
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
        <div className={styles.textsection}>
          <h2>
            命題　：
            <TextField
              id="outlined-basic"
              label="タイトル"
              variant="outlined"
              className={styles.input}
            />
          </h2>

          <h2>
            投稿者：
            <TextField
              id="outlined-basic"
              label="名前"
              variant="outlined"
              className={styles.input}
            />
          </h2>

          <h2>
            回答者：
            <TextField
              id="outlined-basic"
              label="回答者名"
              variant="outlined"
              className={styles.input}
            />
          </h2>

          <h2>
            詳細　：
            <TextField
              id="outlined-multiline-static"
              label="投稿内容"
              multiline
              rows={6}
              className={styles.detail}
            />
          </h2>
        </div>

        {/* ↓後でonclick変える */}
        <div className={styles.button}>
          <Button
            variant="contained"
            color="success"
            className={styles.addbutton}
            onClick={closeModal}
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
