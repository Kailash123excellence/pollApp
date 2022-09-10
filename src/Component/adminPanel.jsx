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

import { useDispatch, useSelector } from "react-redux";
import {
  pollRequest,
  deletePollRequest,
  editPollTitleRequest,
  newOptionRequest,
  removeOptionRequest,
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

  const [addOption, setAddOption] = useState(false);
  const [editOption, setEditOption] = useState({});
  const [newOption, setNewOption] = useState({
    id:"",
    text:"",
  });


  const [removeOption, setRemoveOption] = useState(false);
  const [editRemoveOption, setEditRemoveOption] = useState({});
  const [oldOption, setOldOption] = useState({
    id: "",
    text: "",
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
    dispatch(pollRequest());
  };


  const handleEdit = (id, text) => {
    console.log(id, text);
    setEditPoll(!editPoll);
    setEditable({ id: id, title: text });
    console.log(editable, "edittit");
  };

  const handleEditTitle = (e) => {
    setEditable({ ...editable, title: e.target.value });
    console.log(editable, "at on change");
  };
  
  const handleEditSubmit = (e) => {
    e.preventDefault()
    
    dispatch(editPollTitleRequest({
      id:editable.id,
      title:editable.title
    }));
    setEditPoll(!editPoll)
        dispatch(pollRequest());
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
  
  const submitEditOption=(event)=>{
    event.preventDefault()
    dispatch(newOptionRequest({
      id: newOption.id,
      text:newOption.text,
    }));
    setAddOption(!addOption);
    dispatch(pollRequest())
  }

const EditHandleRemoveOption=(id)=>{
    setRemoveOption(!removeOption);
    setEditRemoveOption(id);
}

const handleEditRemoveOption=(e)=>{
  setOldOption({ id: editRemoveOption, text: e.target.value });
}

const submitRemoveOption=(e)=>{
  e.preventDefault()
  dispatch(
    removeOptionRequest({
      id: oldOption.id,
      text: oldOption.text,
    })
  );
  setRemoveOption(!addOption);
  dispatch(pollRequest());

}
   

  useEffect(() => {
    dispatch(pollRequest());
  }, []);
  
  return (
    <>
      <div
        className="adminContainer"
      >
        <Navbar />

        <Stack
          sx={{
            mb: 4,
            
            width:'50%',
            margin: "auto",
            // paddingLeft: "25%",
            border:2,
            borderColor:'primary.main',
            borderRadius:'10px',
            backgroundColor:"red",
            
          }}
          direction="row"
          spacing={2}
          m={5}
        >
            <Button
            className="addBtn"
              sx={{mt:10,width:'100%' }}
              
              // variant="contained"
              endIcon={<AddIcon />}
              onClick={()=><AddNewPoll/>}
            >
          <Link to="/addNewPoll">
              add Poll
          </Link>
            </Button>
        </Stack>

        {pollSelector.isSuccess ? (
          pollSelector.data.data.map((item) => {
            return (
              <Card
                sx={{
                  minWidth: 275,

                  width: "50%",
                  margin: "auto",
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
                  <Button
                    variant="outlined"
                    startIcon={<AddIcon />}
                    onClick={() => handleAddOption(item._id)}
                  ></Button>
                  <Button
                    variant="outlined"
                    startIcon={<RemoveIcon />}
                    onClick={() => EditHandleRemoveOption(item._id)}
                  ></Button>
                </Stack>

                <CardContent sx={{ marginLeft: "50px" }}>
                  <Typography
                    variant="h2"
                    sx={{ fontSize: 25 }}
                    color="blue"
                    gutterBottom
                  >
                    {/* {editPoll && item._id === editable.id ? (
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
                        onChange={(e) => handleEditTitle(e)}
                      />
                    ) : (
                      item.title
                    )} */}

                    {editPoll && item._id === editable.id ? (
                      <Box
                        component="form"
                        sx={{
                          "& > :not(style)": {
                            m: 1,
                            fontSize: "30px",
                            width: "20ch",
                          },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={(e) => handleEditSubmit(e)}
                      >
                        <TextField
                          id="standard-basic"
                          value={editable.title}
                          type="text"
                          variant="standard"
                          onChange={(e) => handleEditTitle(e)}
                        />
                      </Box>
                    ) : (
                      item.title
                    )}
                  </Typography>

                  {item.options.map((val) => {
                    return (
                      <>
                        <Typography sx={{ mb: 1.5 }} color="black">
                          {val.option}
                        </Typography>
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

                  {removeOption && item._id === editRemoveOption ? (
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
                  )}
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
    </>
  );
}
