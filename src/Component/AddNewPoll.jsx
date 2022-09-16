import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
   
  
  function handleSubmitAddPoll(e) {
    e.preventDefault();
    
      if (addPoll.question.trim()) {
        dispatch(addPollRequest(addPoll));
        navigate("/adminPanel");
      } else {
        navigate("/addNewPoll");
      }
    
    
  }

  const handleOptionPoll = () => {
    if (addPoll.option.length <4) {
      addPoll.option.push({option:"",vote:0 });
      setCounter(counter+1)
    }
  };

  const handleOnChangeOption = (index,e) => {
     
    

    {addPoll.option.map((val,indexOption)=>{
          if(indexOption===index){
          
            val.option=(e.target.value).trim()
          
        }
      
    })}
    
  };

  const backToHome= ()=>{
    navigate('/adminPanel')
  }

  return (
    <>
      <div className="addPollContainerForm">
        <Navbar />

        <form className="addNewPollForm" onSubmit={handleSubmitAddPoll}>
          <input
            type="text"
            required
            autoFocus
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
                autoFocus
                className="inputOptionValue"
                onChange={(e) => handleOnChangeOption(index, e)}
                
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
            <Button variant="contained" color="secondary" onClick={backToHome} >
              home
            </Button>
          </Stack>

         
        </form>

          </div>
    </>
  );
}
