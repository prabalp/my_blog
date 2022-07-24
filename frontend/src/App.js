import "./App.css";
import NewBlog from "./components/NewBlog";
import Blog from "./components/Blog";
import { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "./components/MediaCard";
import { Button } from "@mui/material";

function App() {
  const [page, setpage] = useState("HOME");
  const [data, setdata] = useState([]);
  const [currblog, setcurrblog] = useState();
  const [newblog, setnewblog] = useState({
    title: "demo",
    description: "demo",
  });

  useEffect(() => {
    axios.get("http://localhost:3000/blog/getblogs").then((response) => {
      console.log(response.data);
      setdata(response.data["data"]);
      // console.log(response.data["data"]);
      console.log(data);
    });
    // const response = axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(response);
  }, []);

  const compRet = (msg) => {
    if (msg === "HOME") {
      return (
        <>
          {data.map((value) => {
            return (
              <div
                onClick={() => {
                  setcurrblog(value);
                  console.log("clicked");
                  setpage("BLOG");
                }}
              >
                <MediaCard
                  title={value["title"]}
                  description={value["description"]}
                />
              </div>
            );
          })}
          <Button
            onClick={() => {
              console.log("clicked");
              setpage("NEW");
            }}
            style={{
              position: "fixed",
              bottom: "50px",
              right: "50px",
            }}
            variant="contained"
          >
            NEW
          </Button>
        </>
      );
    } else if (msg === "NEW") {
      return (
        <>
          <NewBlog newblog={newblog} setnewblog={setnewblog} />
          <Button
            onClick={async () => {
              console.log(newblog["title"]);
              axios
                .post("http://localhost:3000/blog/addblog", newblog)
                .then(() => {
                  setpage("HOME");
                })
                .catch((error) => {
                  alert(error);
                });
            }}
            style={{
              position: "fixed",
              bottom: "50px",
              right: "50px",
            }}
            variant="contained"
          >
            PUBLISH
          </Button>
        </>
      );
    } else if (msg === "BLOG") {
      return (
        <>
          <Blog
            title={currblog["title"]}
            description={currblog["description"]}
          />

          <Button
            onClick={() => {
              console.log("clicked");
              setpage("HOME");
            }}
            style={{
              position: "fixed",
              bottom: "50px",
              right: "50px",
            }}
            variant="contained"
          >
            Home
          </Button>
        </>
      );
    }
  };

  return <div className="App">{compRet(page)}</div>;
}

export default App;
