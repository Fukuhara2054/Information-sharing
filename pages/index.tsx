import type { NextPage } from "next";
import Add from "../components/add";
import Display from "../components/fire/display";
import Post from "../components/post";
import Search from "../components/search";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Add />
        <Search />
        {/* <Display /> */}
      </div>
      <div>
        <Post />
      </div>
    </div>
  );
};

export default Home;
