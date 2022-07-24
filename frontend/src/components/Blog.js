import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function Blog(props) {
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
        <Typography color="primary" variant="h3">
          {props.title}
        </Typography>
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
        <Typography variant="h5">{props.description}</Typography>
        {/* <TextField
        placeholder={props.description}
          multiline
          rows={10}
          maxRows={14}
          fullWidth
          label="Content"
          id="Content"
        /> */}
      </Box>
    </div>
  );
}

export default Blog;
