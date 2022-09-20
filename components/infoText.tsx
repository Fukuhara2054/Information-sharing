import { FC } from "react";
import styles from "../styles/Add.module.scss";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { VaccinesTwoTone } from "@mui/icons-material";
import { app } from "./fire/fire";
import { getAuth, signOut } from "firebase/auth";



//型指定もっといい書き方あるかも
type props = {
  setTitle: Dispatch<SetStateAction<string>>;
  setContent: Dispatch<SetStateAction<string>>;
  setQuestioner: Dispatch<SetStateAction<string>>;
  setAnswer: Dispatch<SetStateAction<string>>;
  setTag: Dispatch<SetStateAction<string>>;
};
//情報共有の時しか使わないコンポーネント
const InfoText: FC<props> = (props) => {
  const changeTitle = (e) => {
    props.setTitle(e.target.value);
    props.setQuestioner(auth.currentUser?.displayName)
  };
  const changeContent = (e) => {
    props.setContent(e.target.value);
  };
  const changeTag = (e) => {
    props.setTag(e.target.value);
  };
  const changeAnswer = (e) => {
    props.setAnswer(e.target.value);
  };
  const auth = getAuth(app);
  return (
    <div className={styles.textsection}>
      <h2>
        命題　：
        <TextField
          id="outlined-basic"
          label="タイトル"
          variant="outlined"
          className={styles.input}
          onChange={changeTitle}
        />
      </h2>

      <h2>
        投稿者：{auth.currentUser?.displayName}
      </h2>

      <h2>
        タグ名：
        <FormControl fullWidth>
          <InputLabel>タグ</InputLabel>
          <Select
            label="タグ"
            className={styles.inputform}
            onChange={changeTag}
          >
            <MenuItem value={"緊急"}>緊急</MenuItem>
            <MenuItem value={"報告"}>報告</MenuItem>
            <MenuItem value={"ツール"}>ツール</MenuItem>
            <MenuItem value={"学習"}>学習</MenuItem>
            <MenuItem value={"確認"}>確認</MenuItem>
          </Select>
        </FormControl>
      </h2>

      <h2>
        回答者：
        <FormControl fullWidth>
          <InputLabel>回答者</InputLabel>
          <Select
            label="回答者"
            className={styles.inputform}
            onChange={changeAnswer}
          >
            <MenuItem value={"鴨川さん"}>鴨川さん</MenuItem>
            <MenuItem value={"関口さん"}>関口さん</MenuItem>
            <MenuItem value={"秋山さん"}>秋山さん</MenuItem>
            <MenuItem value={"柿沼さん"}>柿沼さん</MenuItem>
            <MenuItem value={"山光さん"}>山光さん</MenuItem>
          </Select>
        </FormControl>
      </h2>
      <h2>
        詳細　：
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
  );
};
export default InfoText;
