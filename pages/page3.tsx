import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { FC, useState, useEffect } from "react";
import { db } from "../components/fire/fire";
import { collection, addDoc, query, where } from "firebase/firestore";
import { doc, setDoc, getDocs, getDoc } from "firebase/firestore";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

const Page3: NextPage = () => {
  // const [map, setMap] = useState({})

  // useEffect(() => {
  //   const data = collection(db, "users")
  //   getDocs(data).then((snapshot) => {
  //     setMap(snapshot.docs.map((doc) => doc.data().tags))
  //     for (let key in map){
  //       for (let value in map[key]){
  //           // push(map[key][value])
  //         // console.log(Object.keys(m[key][value]))
  //       }
  //     }
  //   })
  // },[])
  return (
    <div className="">
      <Layout title="お気に入り">
        <div>
          <div>
            <h1>おはようございます</h1>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Page3;
