import { useState, useEffect, FC } from 'react'
import { useRouter } from 'next/router'
import db from './fire'
import { collection, addDoc } from "firebase/firestore";
import Link from 'next/link';
const Add: FC = () => {
    const [message, setMessage] = useState('データを入力してください')
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    const onChangeName = ((e) => {
        setName(e.target.value)
    })
    const onChangeAge = ((e) => {
        setAge(e.target.value)
    })

    const handleClickAddButton = () => {
        const docRef = addDoc(collection(db, "mydata"), {
            name: name,
            age: age
        })
        setMessage('データベースに登録しました。')

    }

    return (
        <div>
            <div>
                <label>名前</label>
                <input name="name" type="text" placeholder="名前" onChange={onChangeName}/>
            </div>
            <div>
                <label>Age</label>
                <input name="Age" type="number" placeholder="年齢"  onChange={onChangeAge}/>
            </div>
            <div>
                <button onClick={handleClickAddButton}>登録</button>
            </div>
            <p>{message}</p>
            <Link href='edit'>編集画面にいく</Link>
        </div>

    )
}
export default Add