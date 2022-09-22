import { useState, useEffect, FC } from 'react'
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import styles from "../styles/Post.module.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { pink } from '@mui/material/colors';
import { db } from "./fire/fire";
import { app } from "./fire/fire"
import { getAuth, signOut } from "firebase/auth"
import { collectionGroup, getDocs, where, orderBy, query, deleteDoc, doc, collection, getDoc, updateDoc } from "firebase/firestore";


type id = {
    id: string
    onMark: string
    check: boolean
}
const Like: FC<id> = ({ id, onMark, check }) => {
    const auth = getAuth(app)
    const [mark, setMark] = useState()


    const bookMark = (e) => {
        console.log(e.target.checked)
        if (e.target.checked == true) {
            const washingtonRef = doc(db, "users", auth.currentUser?.uid, 'info', id);

            // Set the "capital" field of the city 'DC'
            updateDoc(washingtonRef, {
                bookmark: true
            });
        } else {
            const washingtonRef = doc(db, "users", auth.currentUser?.uid, 'info', id);

            // Set the "capital" field of the city 'DC'
            updateDoc(washingtonRef, {
                bookmark: false
            });
        }
    }

    return (
        <>
            {check ? (
                <Checkbox
                    icon={<StarBorderIcon />}
                    checkedIcon={<StarIcon />}
                    className={onMark}
                    onClick={bookMark}
                    defaultChecked
                    sx={{
                        color: "#00B2FF",
                        "&.Mui-checked": {
                          color: "#00B2FF",
                        }
                    }}
                />
            ) : (
                <Checkbox
                    icon={<StarBorderIcon />}
                    checkedIcon={<StarIcon />}
                    className={onMark}
                    onClick={bookMark}
                />
            )}
        </>
    )
}
export default Like