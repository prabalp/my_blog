import "./App.css";

import HomePage from "./components/HomePage";
import NewBlog from "./components/NewBlog";
import Blog from "./components/Blog";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [page, setpage] = useState("HOME");
  const [data, setdata] = useState({});

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      setdata(response.data);
      console.log(data);
    });
    // const response = axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(response);
  }, []);

  const compRet = (msg) => {
    if (msg === "HOME") {
      return <HomePage data={data} />;
    } else if (msg === "NEW") {
      return <NewBlog />;
    } else if (msg === "BLOG") {
      return <Blog />;
    }
  };

  return <div className="App">{compRet(page)}</div>;
}

export default App;
