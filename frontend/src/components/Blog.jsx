import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Blog() {
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
        <TextField fullWidth label="Title" id="Title" />
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
          multiline
          rows={10}
          maxRows={14}
          fullWidth
          label="Content"
          id="Content"
        />
      </Box>
    </div>
  )
}

export default Blog