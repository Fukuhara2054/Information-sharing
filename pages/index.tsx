import type { NextPage } from "next";
import Add from "../components/add";
import Post from "../components/post";
import Search from "../components/search";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Add />
        <Search />
      </div>
      <div>
        <Post />
      </div>
    </div>
  );
};

export default Home;
