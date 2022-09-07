import * as React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ResponsiveAppBar from "./navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


export default function FloatingActionButtons() {
  const [add, setAdd] = useState(false);
  const [question, setQuestion] = useState({
    text: "",
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
  });


  function handleAdd() {
    setAdd(!add);
  }

  function addPollQuestion(){
    console.log("Called1");
    fetch(
      `https://secure-refuge-14993.herokuapp.com/add_poll?title=${text}%20polll&options=${opt1}____${opt2}____${opt3}____${opt4}`,
      {
        method: "POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
      }
      
      )
      .then ((response)=>{
      console.log("Called2");
      if(response.status!==200){
        throw new Error (response.statusText)
      }
      return response.json();
    })
    .then(()=>{
      setMessage("question uploaded success fully");
      setStatus('success');
    })
    .catch((err)=>{
      setMessage(err.toString());
      setStatus("error")
    })
  }

  return (
    <>
      {/* <ResponsiveAppBar /> */}

      <Stack direction="row" spacing={2} m={5}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>

        <Button variant="contained" endIcon={<AddIcon />} onClick={handleAdd}>
          add
        </Button>

        <Button variant="contained" endIcon={<SendIcon />}>
          show
        </Button>
      </Stack>
      {add === true ? (
        <>
          <form method="post" onSubmit={() => addPollQuestion()}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Enter Your Question"
                variant="outlined"
                name="text"
                onChange={(e) =>
                  setQuestion({ text: e.target.value })
                }
              />
            </Box>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "30ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Option 1"
                variant="outlined"
                name="opt1"
                onChange={(e) => setQuestion({ opt1: e.target.value })}
              />
              <TextField
                id="outlined-basic"
                label="Option 2"
                variant="outlined"
                name="opt2"
                onChange={(e) => setQuestion({ opt2: e.target.value })}
              />
              <TextField
                id="outlined-basic"
                label="Option 3"
                variant="outlined"
                name="opt3"
                onChange={(e) => setQuestion({ opt3: e.target.value })}
              />
              <TextField
                id="outlined-basic"
                label="Option 4"
                variant="outlined"
                name="opt4"
                onChange={(e) => setQuestion({ opt4: e.target.value })}
              />
            </Box>
            <Stack spacing={2} direction="row" width="50ch">
              <Button variant="contained" onClick={addPollQuestion}>
                Submit
              </Button>
            </Stack>
          </form>
        </>
      ) : (
        ""
      )}
    </>
  );
}

// import React from 'react'
// export default function AdminPanel() {
//   return (
//     <div>

//     </div>
//   );
// }
