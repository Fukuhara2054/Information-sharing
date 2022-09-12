import type { NextPage } from "next";
import InfoPost from "../components/infoPost";
import { Layout } from "../components/Layout";
import React from "react";

const Home: NextPage = () => {
  return (
    <Layout title="共有事項">
      <div>
        <div>
          <InfoPost />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
