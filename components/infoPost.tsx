import { FC, useState } from "react";
import styles from "../styles/Post.module.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { pink } from '@mui/material/colors';
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { Edit, EditAttributesTwoTone } from "@mui/icons-material";
import EditButton from "./editButton";
const Post: FC = () => {
  //これはなんだろう（福原）
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  //詳細などの開閉処理
  // const update_honbun = () => {
  //   const target1 = document.getElementById("honbun");
  //   if (target1.style.display == "block") {
  //     target1.style.display = "none";
  //   } else {
  //     target1.style.display = "block";
  //   }
  // };


  //詳細などの開閉処理の問題を解決しました。
  const [open, setOpen] = useState(styles.display1)
  
  const onClick = () => {
    if(open == styles.display1){
      setOpen(styles.display2)
    }else{
      setOpen(styles.display1)
    }
  }

  return (
    <div className={styles.box2}>
    <div className={styles.main}>
            {/* お気に入りボタン */}
            <Checkbox
        {...label}
        icon={<StarBorderIcon />}
        checkedIcon={<StarIcon />}
        sx={{
          color: pink[600],
          '&.Mui-checked': {
            color: pink[500],
          },
        }}
        className={styles.okiniiri}
      />
      <div className={styles.abc}>
        <h2>
          命題:qqqqqqqqqqqqqqqqqqqq
          {/* 開閉ボタン */}
          <Checkbox
            {...label}
            icon={<ExpandMoreIcon />}
            checkedIcon={<ExpandLessIcon />}
            onClick={onClick}
          />
        </h2>
      </div>
      <div id="honbun" className={open}  >
        {/* <p className={styles.uta}>詳細:</p>
          <p>
            現在研修に入っている全員が参加対象です場所はGATE5階セミナールームですが、オンラインでも参加可能です。
          </p> */}
        <label htmlFor="">詳細:pppppppppppppppppp </label>
        <div className={styles.link}>
        <EditButton />
        </div>
      </div>
      <div>
        <p>回答者: 関口さん　記載者:岩崎さん　2022/8/12:33:12</p>
      </div>
    </div>
  </div>
  );
};

export default Post;
