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

  const getData = () => {
    axios.get("http://localhost:3000/blog/getblogs").then((response) => {
      console.log(response.data);
      setdata(response.data["data"]);
      console.log(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const compRet = (msg) => {
    if (msg === "HOME") {
      return (
        <div className="Center">
          {data.map((value) => {
            return (
              <div
                className="Spacing"
                onClick={() => {
                  setcurrblog(value);
                  console.log("clicked");
                  setpage("BLOG");
                }}
                style={{
                  width: "auto",
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
        </div>
      );
    } else if (msg === "NEW") {
      return (
        <div className="Center">
          <NewBlog newblog={newblog} setnewblog={setnewblog} />
          <Button
            onClick={() => {
              console.log("clicked");
              setpage("HOME");
            }}
            style={{
              position: "fixed",
              bottom: "50px",
              right: "150px",
            }}
            variant="contained"
          >
            Home
          </Button>
          <Button
            onClick={async () => {
              console.log(newblog["title"]);
              axios
                .post("http://localhost:3000/blog/addblog", newblog)
                .then(() => {
                  setpage("HOME");
                  getData();
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
        </div>
      );
    } else if (msg === "BLOG") {
      return (
        <div className="Center">
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
        </div>
      );
    }
  };

  return <div className="App">{compRet(page)}</div>;
}

export default App;
