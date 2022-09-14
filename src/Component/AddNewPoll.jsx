import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addPollRequest } from "../redux/action/index";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "./navbar";

export default function AddNewPoll() {
  const dispatch = useDispatch();
const navigate = useNavigate()
  const [addPoll, setAddPoll] = useState({
    question: "",
    option: [],
  });
  const [counter, setCounter] = useState(0);
  // const [option, setOption] = useState("");

    // console.log(addPoll.option, "option");
  
  function handleSubmitAddPoll(e) {
    e.preventDefault();
    
    // console.log(addPoll.option, "option");
    dispatch(addPollRequest(addPoll))
    // setAddPoll({...addPoll,question:""})

    // setAddPoll({...addPoll,option:[]})

    navigate('/adminPanel')
  }

  const handleOptionPoll = () => {
    if (addPoll.option.length <4) {
      addPoll.option.push({option:"",vote:0 });
      setCounter(counter+1)
    }
  };

  const handleOnChangeOption = (index,e) => {
    console.log(index, "index");
    

    {addPoll.option.map((val,indexOption)=>{
          if(indexOption===index){
          // console.log(val, "Val");
            val.option=e.target.value
          
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
            onChange={(e) =>
              setAddPoll({ ...addPoll, question: e.target.value })
            }
            placeholder="Enter your poll question"
          />

          {addPoll.option.map((val, index) => {
            return (
              <input
                type="text"
                required
                className="inputOptionValue"
                onChange={(e)=>handleOnChangeOption(index,e)}
                // value={val[index]?.value}
                placeholder={"option"}
              />
            );
          })}

          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              color="primary"
              onClick={handleOptionPoll}
            >
              Add Option
            </Button>
            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
          </Stack>

          {/* <button className="AddBtn" onClick={handleOptionPoll}>
          Add Option
        </button>
        <button className="AddBtn" type="submit">
          Submit
        </button> */}
          {/* <Link className="backLink" to="/adminPanel">
            <Button className="backBtn" variant="contained">
              Back to Admin Page
            </Button>
          </Link> */}
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
