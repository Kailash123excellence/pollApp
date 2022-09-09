import * as React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Navbar from "./navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddNewPoll from "./AddNewPoll";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  pollRequest,
  deletePollRequest,
  editPollTitleRequest,
} from "../redux/action";

export default function FloatingActionButtons() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pollSelector = useSelector((state) => state && state.pollReducer);
  // console.log(pollSelector, "admin");

  const [add, setAdd] = useState(false);
  // const [pollData, setPollData] = useState([]);
  const [deletePoll, setDeletePoll] = useState(false);
  const [editPoll, setEditPoll] = useState(false);
  const [editable, setEditable] = useState({
    id: "",
    title: "",
  });
  const [question, setQuestion] = useState({
    text: "",
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
  });

  const handleDelete = (id) => {
    dispatch(deletePollRequest(id));
  };

  const handleEdit = (id, text) => {
    console.log(id, text);

    setEditPoll(!editPoll);

    setEditable({ id: id, title: text });
    console.log(editable, "edittit");
  };

  const handleEditTitle = (e) => {
    setEditable({...editable,title:e.target.value})
    dispatch(editPollTitleRequest(editable));
  };

  //   const handleAddOption=((id)=>{
  //     console.log("Add option");
  //     console.log(id," get id")
  //     const option= prompt("Enter your option")
  // {pollData.map((val)=>{
  //   if(val._id==id){
  //     axios.put(
  //       `https://secure-refuge-14993.herokuapp.com/add_new_option?id=${id}&option_text=${option}`
  //     );
  //   }
  // })}
  //   })

  useEffect(() => {
    dispatch(pollRequest());
  }, []);

  return (
    <>
      <div style={{ margin: "0px", padding: "0px", height: "100vh" }}>
        <Navbar />

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
          <Link to="/addNewPoll">
            <Button
              sx={{ width: "100%" }}
              variant="contained"
              endIcon={<AddIcon />}
              // onClick={handleAdd}
            >
              add Poll
            </Button>
          </Link>
        </Stack>

        {pollSelector.isSuccess
          ? pollSelector.data.data.map((item) => {
              return (
                <Card
                  sx={{
                    minWidth: 275,
                    border: "1px solid black",
                    width: "50%",
                    margin: "auto",
                    backgroundColor: "lightgray",
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
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<EditIcon />}
                      onClick={() => handleEdit(item._id, item.title)}
                    >
                      Update Title
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<AddIcon />}
                      // onClick={() => handleAddOption(item._id)}
                    >
                      Add Option
                    </Button>
                  </Stack>

                  <CardContent sx={{ marginLeft: "50px" }}>
                    <Typography
                      variant="h2"
                      sx={{ fontSize: 25 }}
                      color="blue"
                      gutterBottom
                    >
                      {editPoll && item._id === editable.id ? (
                        <input
                          type="text"
                          value={editable.title}
                          // onChange={(e) =>
                          //   dispatch(
                          //     editPollTitleRequest(
                          //       setEditable({
                          //         ...editable,
                          //         title: e.target.value,
                          //       })
                          //     )
                          //   )
                          // }
                          onChange={(e)=>handleEditTitle(e)}
                        />
                      ) : (
                        item.title
                      )}
                      {/* {editPoll ? (
                      <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      // autoComplete="off"
                    >
                    <TextField id="standard-basic" value={editable}  type="text" label="Edit" variant="standard" onChange={(e)=>setQuestion({...question, text:e.target.value})}/>
                    </Box>):(
                    item.title
                  )} */}

                      {/* Q . {item.title}? */}
                    </Typography>

                    {item.options.map((val) => {
                      return (
                        <Typography sx={{ mb: 1.5 }} color="black">
                          {val.option}
                        </Typography>
                      );
                    })}
                  </CardContent>
                </Card>
              );
            })
          : ""}
      </div>
    </>
  );
}
