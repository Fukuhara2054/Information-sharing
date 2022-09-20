import { useState, useEffect, FC } from 'react'
import db from './fire'
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import Link from 'next/link';
const Edit: FC =() => {
    const [data, setData] = useState([])
    const [age, setAge] = useState(0)
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        const postData = collection(db, "mydata")
        getDocs(postData).then((snapshot) => {
            setData(snapshot.docs.map((doc) => doc.data()))

        })

    }, [message])

    const onChangeName = ((e) => {
        setMessage('')

        setName(e.target.value)
    })
    const onChangeAge = ((e) => {
        setMessage('')

        setAge(e.target.value)

    })


    const edit = () => {
        const postData = doc(db, "mydata", 'dQNHUSdKYaGBuSNX3X0M')
        updateDoc(postData, {
            name: name,
            age: age,
        });
        setMessage('データベースを編集しました。')
    }

    return (
        <div>
            {data.map((dat, key) => (
                <ul key={key}>
                    <li>{dat.name}</li>
                    <li>{dat.age}歳</li>
                </ul>
            ))}
            <Link href='add'>追加画面</Link>
            <div>
                <label>名前</label>
                <input name="name" type="text" placeholder="名前" onChange={onChangeName} />
            </div>
            <div>
                <label>Age</label>
                <input name="Age" type="number" placeholder="年齢" onChange={onChangeAge} />
            </div>
            <div>
                <button>編集</button>
                <div>
                    {message}

                </div>
            </div>
        </div>
    )
}
export default Edit