import React, { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];
function DemoUseEffect() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  // useEffect is a callback function that will be called later
  useEffect(() => {
    console.log("type changed");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, [type]);
  // react is UI-first so it is better to useEffect to change elements of DOM
  return (
    <div>
      {/* <input
        type="text"
        name=""
        id=""
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {console.log("Render")}
      <ul>
        {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      {tabs.map((tab) => (
        <button key={tab} onClick={() => setType(tab)}>
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title ? post.title : post.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default DemoUseEffect;

// common: callback will be called after component was mounted
// 3 ways to use useEffect
// Method 1: useEffect(callback) => always call -> affect performance
// Method 2: useEffect(callback, []) => only call once after component was mounted
// Method 3: useEffect(callback, [deps]) => called after component was mounted then will be called if the dependency is changed
