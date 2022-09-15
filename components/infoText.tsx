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
};
//情報共有の時しか使わないコンポーネント
const InfoText: FC<props> = (props) => {
  const changeTitle = (e) => {
    props.setTitle(e.target.value);
  };
  const changeContent = (e) => {
    props.setContent(e.target.value);
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
        回答者：
        <FormControl fullWidth>
          <InputLabel>回答者</InputLabel>
          <Select
            label="回答者"
            className={styles.inputform}
            onChange={changeAnswer}
          >
            <MenuItem value={10}>鴨川さん</MenuItem>
            <MenuItem value={20}>関口さん</MenuItem>
            <MenuItem value={30}>秋山さん</MenuItem>
            <MenuItem value={40}>柿沼さん</MenuItem>
            <MenuItem value={50}>山光さん</MenuItem>
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
