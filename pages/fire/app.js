import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import db from '../../components/fire'
import { collection, addDoc } from "firebase/firestore";

export default function Add() {
    const [message, setMessage] = useState('add data')
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [age, setAge] = useState(0)
    const router = useRouter()

    const onChangeName = ((e) => {
        setName(e.target.value)
    })
    const onChangeMail = ((e) => {
        setMail(e.target.value)
    })
    const onChangeAge = ((e) => {
        setAge(e.target.value)
    })

    const handleClickAddButton = () => {
        const docRef = addDoc(collection(db, "mydata"), {
            name: "Tokyo",
            country: "Japan"
        })

    }

    // return (
    //     <Layout header='next.js' title='Top Page'>
    //         {/* <form onSubmit={handleSubmit}>
    //             <div>
    //                 <label>名前</label>
    //                 <input name="name" type="text" placeholder="名前" />
    //             </div>
    //             <div>
    //                 <label>メールアドレス</label>
    //                 <input name="email" type="text" placeholder="メールアドレス" />
    //             </div>
    //             <div>
    //                 <button>登録</button>
    //             </div>
    //         </form> */}
    //         <button onClick={handleClickAddButton}>ボタン</button>
    //     </Layout>
    // )
    return (
        <div className='Add'>
            <button onClick={handleClickAddButton}>追加</button>
        </div>
    )
}