import React from "react";
import { useState } from "react";
import MediaCard from "./MediaCard";

function HomePage(props) {
  // console.log("home data", props.props)
  // const data = props.props;
  const data = props.data;
  var count = Object.keys(data).length;
  console.log(count);
  return (
    <div>
      {/* {data} */}
      {/* {
        data.map((value)=>{
          <MediaCard value = {value} /> 
          // console.log(value)
        })
      } */}
      {/* {data.map((value) => {
        // <MediaCard value={value} />;
        console.log(value.title);
      })} */}
    </div>
  );
}

export default HomePage;
