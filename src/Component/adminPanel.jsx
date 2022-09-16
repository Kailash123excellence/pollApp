import * as React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import RemoveIcon from "@mui/icons-material/Remove";
import Navbar from "./navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { borders } from "@mui/system";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddNewPoll from "./AddNewPoll";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Radio from "@mui/material/Radio";

import { useDispatch, useSelector } from "react-redux";
import {
  pollRequest,
  deletePollRequest,
  editPollTitleRequest,
  newOptionRequest,
  removeOptionRequest,
} from "../redux/action";
import EditTitle from "./EditTitle";

export default function FloatingActionButtons() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pollSelector = useSelector((state) => state && state.pollReducer);

  const removeSelector = useSelector(
    (state) => state && state.removeOptionReducer
  );


  const user = localStorage.getItem("role");

  const [editTitle, setEditTitle] = useState(false);
  const [deletePoll, setDeletePoll] = useState(false);
  const [editPoll, setEditPoll] = useState(false);
 const [pollData,setPollData]= useState([])
  const [removeText, setRemoveText] = useState({
    id: "",
    text: "",
  });
  const [addOption, setAddOption] = useState(false);
  const [editOption, setEditOption] = useState({});
  const [newOption, setNewOption] = useState({
    id: "",
    text: "",
  });

   
  const handleDelete = (id) => {
    dispatch(deletePollRequest(id));
    
  };

  const handleEdit = (id, text) => {
    localStorage.setItem("text", text);
    navigate(`/editTitle/${id}`);
 
  };

 

  const handleAddOption = (id) => {
    console.log(id, "id");
    setAddOption(!addOption);
    setEditOption(id);
  };

  const handleEditOption = (e) => {
    setNewOption({ id: editOption, text: e.target.value });
    console.log(newOption);
  };

  const submitEditOption = (event) => {
    event.preventDefault();
    dispatch(
      newOptionRequest({
        id: newOption.id,
        text: newOption.text,
      })
    );
    setAddOption(!addOption);
  };

  const submitRemoveOption = (id, text) => {
    setRemoveText({
      id: id,
      text: text,
    });

    dispatch(removeOptionRequest(id, text));
   
  };

  useEffect(() => {
    if (user === "admin") {
      dispatch(pollRequest());
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="adminContainer">
        <Navbar />

        <Stack
          sx={{
            mb: 2,

            width: "50%",
            margin: "auto",
          
          }}
          direction="row"
          spacing={2}
          m={5}
        >
          <Link className="addBtn" to="/addNewPoll">
            ADD POLL
          </Link>
        </Stack>
        <div className="cardContainerAdmin">
          {pollSelector.isSuccess ? (
            pollSelector.data.data.map((item, index) => {
              return (
                <Card
                  key={index}
                  sx={{
                    minWidth: 475,
                    width: "50%",
                    margin: "auto",
                    boxShadow: "2px 2px 5px 6px red",
                    mb: 4,
                  }}
                >
                  <Stack
                    sx={{
                      mb: 4,
                      mt: 2,
                      width: "50%",
                      margin: "auto",
                    }}
                    direction="row"
                    spacing={2}
                    m={5}
                  >
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(item._id)}
                    ></Button>
                    <Button
                      variant="outlined"
                      startIcon={<EditIcon />}
                      
                      onClick={() => handleEdit(item._id, item.title)}
                    ></Button>
                    
                  </Stack>

                  <CardContent sx={{ marginLeft: "50px" }}>
                    <Typography
                      variant="h2"
                      sx={{ fontSize: 25 }}
                      color="blue"
                      gutterBottom
                    >
                      {item.title}
                      
                    </Typography>

                    {item.options.map((val, index) => {
                      return (
                        <>
                          <table st>
                            <tr>
                              <th>vote</th>
                              <th></th>
                            </tr>
                            <tr>
                              <td>{val.vote}</td>
                              <td>{val.option}</td>
                              <td>
                                <div className="editOptionBtn">
                                  {removeSelector.isLoading ? (
                                    <>
                                      {val.option === removeText.text ? (
                                        <Box
                                          sx={{
                                            display: "flex",
                                            float: "right",
                                          }}
                                        >
                                          <CircularProgress />
                                        </Box>
                                      ) : (
                                        <Button
                                          variant="outlined"
                                          startIcon={<DeleteIcon />}
                                          onClick={() =>
                                            submitRemoveOption(
                                              item._id,
                                              val.option
                                            )
                                          }
                                        ></Button>
                                      )}
                                    </>
                                  ) : (
                                    <Button
                                      variant="outlined"
                                      startIcon={<DeleteIcon />}
                                      onClick={() =>
                                        submitRemoveOption(item._id, val.option)
                                      }
                                    ></Button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          </table>
                          {/* <Typography
                            key={index}
                            sx={{ mb: 1.5 }}
                            color="black"
                          >
                            <input
                              type="text"
                              style={{display:'inline-block' ,width:"fit-content"}}
                              // checked={val.vote ? true : false}
                              // onChange={() =>
                              //   handleChange(item._id, val.option)
                              // }
                              // disabled={val.vote ? true : false}
                              disabled={true}
                              value={val.vote}
                              // name={item._id}
                              // name="radio-buttons"
                              // inputProps={{ "aria-label": "A" }}
                            /> */}

                          {/* <Radio
                              type="radio"
                              checked={val.vote ? true : false}
                              // onChange={() =>
                              //   handleChange(item._id, val.option)
                              // }
                              // disabled={val.vote ? true : false}
                              disabled={true}
                              value={val.option}
                              name={item._id}
                              // name="radio-buttons"
                              inputProps={{ "aria-label": "A" }}
                            /> */}
                          {/* {val.option} */}
                          {/* <div className="editOptionBtn">
                            {removeSelector.isLoading ? (
                              <>
                                {val.option === removeText ? (
                                  <Box sx={{ display: "flex", float: "right" }}>
                                    <CircularProgress />
                                  </Box>
                                ) : (
                                  ""
                                )}
                              </>
                            ) : (
                              <Button
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                                onClick={() =>
                                  submitRemoveOption(item._id, val.option)
                                }
                              ></Button>
                            )}
                          </div> */}
                          {/* </Typography> */}
                        </>
                      );
                    })}

                    {addOption && item._id === editOption ? (
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
                        onSubmit={(e) => submitEditOption(e)}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Add Option"
                          variant="outlined"
                          name="opt"
                          // value={question.opt1}
                          onChange={(e) => handleEditOption(e)}
                        />
                      </Box>
                    ) : (
                      ""
                    )}

                    {/* {removeOption && item._id === editRemoveOption ? (
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
                      onSubmit={(e) => submitRemoveOption(e)}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Remove Option"
                        variant="outlined"
                        name="opt"
                        // value={question.opt1}
                        onChange={(e) => handleEditRemoveOption(e)}
                      />
                    </Box>
                  ) : (
                    ""
                  )} */}
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center", ml: 20 }}>
              <CircularProgress />
            </Box>
          )}
        </div>
      </div>
    </>
  );
}
