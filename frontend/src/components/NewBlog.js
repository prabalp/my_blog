import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function NewBlog(props) {
  console.log(props);
  return (
    <div>
      <Box
        style={{
          padding: "20px",
        }}
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          onChange={(event) => {
            props.newblog["title"] = event.target.value;
            console.log(props.newblog);
            // props.setnewblog(props.newblog[]);
          }}
          fullWidth
          label="Title"
          id="Title"
        />
      </Box>
      <Box
        style={{
          padding: "20px",
        }}
        sx={{
          width: 500,
          height: 500,
        }}
      >
        <TextField
          onChange={(event) => {
            props.newblog["description"] = event.target.value;
            console.log(props.newblog);
            // props.setnewblog(props.newblog[]);
          }}
          multiline
          rows={10}
          maxRows={14}
          fullWidth
          label="Content"
          id="Content"
        />
      </Box>
    </div>
  );
}

export default NewBlog;
