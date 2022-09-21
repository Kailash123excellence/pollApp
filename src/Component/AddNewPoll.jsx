import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addPollRequest,
  changePollRequest,
  addPollRequestError,
  addPollRequestSuccess,
  pollRequest,
} from "../redux/action/index";

import CircularProgress from "@mui/material/CircularProgress";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "./navbar";

export default function AddNewPoll() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addPollSelector = useSelector((state) => state && state.addPollReducer);
 

  const [addPoll, setAddPoll] = useState({
    question: "",
    option: [{ option: "", vote: 0 }],
  });
  const [counter, setCounter] = useState(0);
  const [addPollTask, setAddPollTask] = useState(false);

  function handleSubmitAddPoll(e) {
    e.preventDefault();
    addPoll.option.map((val, index) => {
      if (addPoll.question.trim().length > 0 && val.option.trim().length > 0) {
        dispatch(addPollRequest(addPoll));
      } else {
        navigate("/addNewPoll");
      }
    });
  }

  const handleOptionPoll = () => {
    addPoll.option.map((val) => {
      if (val.option.trim().length > 0) {
        if (addPoll.option.length < 4) {
          addPoll.option.push({ option: "", vote: 0 });
          setCounter(counter + 1);
        }
      }
    });
  };

  const handleOnChangeOption = (index, e) => {
    const dataValue = e.target.value;

    const updatedOpt = addPoll.option.map((val, indexOption) => {
      if (indexOption === index) {
        return {
          ...val,
          option: e.target.value,
        };
      } else {
        return val;
      }
    });

    setAddPoll((prev) => {
      return {
        ...prev,
        option: updatedOpt,
      };
    });
  };

  const backToHome = () => {
    navigate("/adminPanel");
  };

  useEffect(() => {
    if (addPollSelector.isSuccess) {
      navigate("/adminPanel");
      dispatch(changePollRequest());
    }
  }, [addPollSelector.isSuccess]);

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

            {addPollSelector.isLoading ? (
              <Box sx={{ display: "flex", justifyContent: "center", ml: 20 }}>
                <CircularProgress />
              </Box>
            ) : (
              <Button variant="contained" color="success" type="submit">
                Submit
              </Button>
            )}

            <Button variant="contained" color="secondary" onClick={backToHome}>
              home
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
}
