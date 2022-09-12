import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addPollRequest } from "../redux/action/index";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "./navbar";

export default function AddNewPoll() {
  const dispatch = useDispatch();

  const [addPoll, setAddPoll] = useState({
    question: "",
    option: [],
  });
  const [counter, setCounter] = useState(0);
  // const [option, setOption] = useState("");



  function handleSubmitAddPoll(e) {
    e.preventDefault();
    
    dispatch(addPollRequest(addPoll))
    setAddPoll({...addPoll,question:""})

    setAddPoll({...addPoll,option:[]})
  }

  const handleOptionPoll = () => {
    if (addPoll.option.length <4) {
      addPoll.option.push("");
      setCounter(counter+1)
    }
  };

  const handleOnChangeOption = (index,e) => {
    

    {addPoll.option.map((val,id)=>{
          if(id===index){
           
            addPoll.option[id]=e.target.value
          
        }
      
    })}
    
  };

  return (
    <>
    <div className="addPollContainerForm">

      <Navbar />

      <form className="addNewPollForm" onSubmit={handleSubmitAddPoll}>
        <input
          type="text"
          className="inputPollTitle"
          value={addPoll.question}
          onChange={(e) => setAddPoll({ ...addPoll, question: e.target.value })}
          placeholder="Enter your poll question"
          />

        {addPoll.option.map((val, index) => {
          return (
            <input
            type="text"
            required
            className="inputOptionValue"
            onChange={(e) => handleOnChangeOption(index, e)}
            // value={val[index]?.value}
            placeholder={"option"}
            />
            );
          })}

        <button className="AddBtn" onClick={handleOptionPoll}>
          Add Option
        </button>
        <button className="AddBtn" type="submit">
          Submit
        </button>
      <Link  className="backLink" to="/adminPanel">
        <Button className="backBtn"  variant="contained">
          Back to Admin Page
        </Button>
      </Link>
      </form>

      {/* <form
        method="post"
        // onSubmit={() => handleSubmitAddPoll()}
        style={{
          width: "50%",
          margin: "auto",
          marginBottom: "20px",
          marginTop: "100px",
        }}
        >
        <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "40ch",
            display: "flex",
            marginTop: "100px",
            flexDirection: "column",
          },
          // onSubmit={(e) => handleSubmitAddPoll(e)}
        }}
        // sx={{
          //   "& > :not(style)": { m: 1, width: "100%" },
          // }}
          noValidate
          autoComplete="off"
          >
          <TextField
            id="outlined-basic"
            label="Enter Your Question"
            variant="outlined"
            name="text"
            // value={question.text}
            onChange={(e) =>
              setAddPoll({ ...addPoll, question: e.target.value })
            }
            />
            
            
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
          </form> */}
          </div>
    </>
  );
}
