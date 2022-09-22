import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { FC, useState, useEffect } from "react";
import { db } from "../components/fire/fire";
import { collection, addDoc, query, where } from "firebase/firestore";
import { doc, setDoc, getDocs, getDoc } from "firebase/firestore";
import { ConnectingAirportsOutlined } from "@mui/icons-material";
import ImportantPost from "../components/importantPost";

const Page3: NextPage = () => {
  return (
    <div className="">
      <Layout title="重要事項">
        <div>
          <div>
            <ImportantPost  />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Page3;
