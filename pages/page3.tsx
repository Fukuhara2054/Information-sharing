import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { FC, useState, useEffect } from "react";
import { db } from "../components/fire/fire";
import { collection, addDoc, query, where } from "firebase/firestore";
import { doc, setDoc, getDocs, getDoc } from "firebase/firestore";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

const Page3: NextPage = () => {
  return (
    <div className="">
      <Layout title="お気に入り">
        <div>
          <div>
            <h1>こんばんは</h1>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Page3;
