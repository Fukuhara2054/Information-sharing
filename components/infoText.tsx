import { FC } from "react";
import styles from "../styles/Add.module.scss";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { VaccinesTwoTone } from "@mui/icons-material";

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
  const changeQuestioner = (e) => {
    props.setQuestioner(e.target.value);
  };
  const changeAnswer = (e) => {
    props.setAnswer(e.target.value);
  };

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
        投稿者：
        <FormControl fullWidth>
          <InputLabel>投稿者</InputLabel>
          <Select
            label="投稿者"
            className={styles.inputform}
            onChange={changeContent}
          >
            <MenuItem value={10}>クラウド</MenuItem>
            <MenuItem value={20}>ザックス</MenuItem>
            <MenuItem value={30}>ティーダ</MenuItem>
            <MenuItem value={40}>ユウナ</MenuItem>
            <MenuItem value={50}>ノクティス</MenuItem>
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
            onChange={changeQuestioner}
          >
            <MenuItem value={10}>クラウド</MenuItem>
            <MenuItem value={20}>ザックス</MenuItem>
            <MenuItem value={30}>ティーダ</MenuItem>
            <MenuItem value={40}>ユウナ</MenuItem>
            <MenuItem value={50}>ノクティス</MenuItem>
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
          onChange={changeAnswer}
        />
      </h2>
    </div>
  );
};
export default InfoText;
