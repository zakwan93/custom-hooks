import React from "react";
import "./App.css";

import User from "../src/components/user/user";
import Post from "../src/components/post/post";

function App() {
  return (
    <div className="App">
      <User userId={5} />
      <Post postId={15} />
    </div>
  );
}

export default App;
