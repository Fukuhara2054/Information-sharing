import {useState, useEffect, FC} from 'react'
import {db} from './fire'
import { collection, getDocs } from 'firebase/firestore';

const Display: FC =() => {
    const [data, setData] = useState([])

    useEffect(() => {
        const postData = collection(db, "users")
        getDocs(postData).then((snapshot)=>{
           setData(snapshot.docs.map((doc)=> doc.data().tags))
        })

    },[])
    return(
        <div>
            <h1>ok</h1>
                {data.map((dat, key) =>(
                    <ul key={key}>
                        <li>{dat}</li>

                    </ul>
                ))}
                {/* <img src='pack.png' width='300' height='400' /> */}
        </div>
    )
}
export default Display