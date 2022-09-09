import { FC, useState } from "react";
import styles from "../styles/Post.module.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { pink } from '@mui/material/colors';
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "next/link";

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
        if (open == styles.display1) {
            setOpen(styles.display2)
        } else {
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
                        質問:qqqqqqqqqqqqqqqqqqqq
                        {/* 開閉ボタン */}
                        <Checkbox
                            {...label}
                            icon={<ExpandMoreIcon />}
                            checkedIcon={<ExpandLessIcon />}
                            onClick={onClick}
                        />
                    </h2>
                    <p>観覧数：1</p>
                    <p>回答数：0</p>
                </div>
                <div id="honbun" className={open}  >
                    <div>
                        <label htmlFor="">内容:pppppppppppppppppp </label>
                    </div>
                    <div>
                        {/* 回答が複数の時のためにコンポーネントにする必要がある */}
                        <label htmlFor="">回答1:wwwwwwwwww</label>
                    </div>
                    <div>
                    <Button>回答</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;