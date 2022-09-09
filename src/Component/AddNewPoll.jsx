import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Navbar from "./navbar";

export default function AddNewPoll() {




  // const [question, setQuestion] = useState({
  //   text: "",
  //   opt1: "",
  //   opt2: "",
  //   opt3: "",
  //   opt4: "",
  // });

  // function addPollQuestion(e) {
  //   e.preventDefault();
  //   if (question.text.length > 0) {
  //     let data = [
  //       question.text,
  //       question.opt1,
  //       question.opt2,
  //       question.opt3,
  //       question.opt4,
  //     ];
  //     axios(
  //       `https://secure-refuge-14993.herokuapp.com/add_poll?title=${question.text}&options=${question.opt1}____${question.opt2}____${question.opt3}____${question.opt4}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     )
  //       .then((result) => {
  //         result.json().then((resp) => {
  //           console.log(resp.data);
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  //     setQuestion({
  //       text: "",
  //       opt1: "",
  //       opt2: "",
  //       opt3: "",
  //       opt4: "",
  //     });
  //   } else {
  //     alert("kindly Enter the Poll");
  //   }
  // }

  return (
    <>
      <Navbar />
      <form
        method="post"
        // onSubmit={() => addPollQuestion()}
        style={{ width: "50%", margin: "auto", marginBottom: "20px" }}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Enter Your Question"
            variant="outlined"
            name="text"
            // value={question.text}
            // onChange={(e) => setQuestion({ ...question, text: e.target.value })}
          />
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "40ch",
              display: "flex",
              flexDirection: "column",
            },
          }}
          noValidate
          autoComplete="off"
        >
          {/* <TextField
            id="outlined-basic"
            label="Option"
            variant="outlined"
            name="opt"
            // value={question.opt1}
            // onChange={(e) => setQuestion({ ...question, opt1: e.target.value })}
          /> */}
          <Button variant="outlined" onClick={console.log("hello")}>
            {/* <TextField
              id="outlined-basic"
              label="Option"
              variant="outlined"
              name="opt"
              // value={question.opt1}
              // onChange={(e) => setQuestion({ ...question, opt1: e.target.value })}
            /> */}
          </Button>
        </Box>

        <Stack spacing={2} direction="row" width="50ch">
          <Button
            variant="contained"
            // onClick={addPollQuestion}
          >
            Submit
          </Button>

          <Link to="/adminPanel">
            <Button variant="contained">home</Button>
          </Link>
        </Stack>
      </form>
    </>
  );
}
