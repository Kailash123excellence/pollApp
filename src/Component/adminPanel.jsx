import * as React from "react";
import { useState, useEffect } from "react";

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
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

 

export default function FloatingActionButtons() {
  const [add, setAdd] = useState(false);
  const [pollData, setPollData] = useState([]);
  const [deletePoll, setDeletePoll] = useState(false);
  const [editPoll, setEditPoll] = useState(false);

  const [question, setQuestion] = useState({
    text: "",
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
  });

  const url = "https://secure-refuge-14993.herokuapp.com/list_polls";

  function handleAdd() {
    setAdd(!add);
  }

  function addPollQuestion(e) {
    e.preventDefault();
    setAdd(!add);
    console.log("Called1");
    console.log(question.text);
    console.log(question.opt1);
    console.log(question.opt2);
    console.log(question.opt3);
    console.log(question.opt4);
    let data = [
      question.text,
      question.opt1,
      question.opt2,
      question.opt3,
      question.opt4,
    ];
    axios(
      `https://secure-refuge-14993.herokuapp.com/add_poll?title=${question.text}&options=${question.opt1}____${question.opt2}____${question.opt3}____${question.opt4}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((result) => {
        result.json().then((resp) => {
          console.log(resp.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("call2");
  }

  const handleShow = () => {
    axios
      .get(url)
      .then((response) => {
        setPollData(response.data.data);
      })
      .catch((error) => {
        console.error(error, "there is some error");
      });
  };

  const handleDelete = (id) => {
    {
      pollData.map((item, index) => {
        if (item._id == id) {
          axios
            .delete(
              `https://secure-refuge-14993.herokuapp.com/delete_poll?id=${id}`
            )
            .then((res) => {
              const updatedData = res.data;
            });
        }
      });
    }
  };


  const handleTitleEdit = (id, text) => {
    setEditPoll(!editPoll)
    // var data= prompt("Enter your updated Title ")
    // if(data.length>0){
    //   text=data
    // }else{
    //   text=text
    // }
{pollData.map((val)=>{
if(val._id==id){
  axios.put(`https://secure-refuge-14993.herokuapp.com/update_poll_title?id=${id}&title=${text}`);
  
}

})}
  };


  const handleAddOption=((id)=>{
    console.log("Add option");
    console.log(id," get id")
    const option= prompt("Enter your option")
{pollData.map((val)=>{
  if(val._id==id){
    axios.put(
      `https://secure-refuge-14993.herokuapp.com/add_new_option?id=${id}&option_text=${option}`
    );
  }
})}
  })

  useEffect(() => {
    handleShow();
  }, [pollData]);
  // console.log(pollData, "####@@@");

  return (
    <>
      <div style={{ margin: "0px", padding: "0px", height: "100vh" }}>
        <ResponsiveAppBar />

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
          {/* <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={deleteAll}
          >
            Delete All
          </Button> */}

          <Button sx={{width:"100%"}} variant="contained" endIcon={<AddIcon />} onClick={handleAdd}>
            add Poll
          </Button>

          {/* <Button variant="contained" endIcon={<SendIcon />} onClick={handleEdit}>
        Edit
      </Button> */}
        </Stack>
        {add === true ? (
      
          <>
            <form
              method="post"
              onSubmit={() => addPollQuestion()}
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
                  onChange={(e) =>
                    setQuestion({ ...question, text: e.target.value })
                  }
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
                <TextField
                  id="outlined-basic"
                  label="Option 1"
                  variant="outlined"
                  name="opt1"
                  onChange={(e) =>
                    setQuestion({ ...question, opt1: e.target.value })
                  }
                />
                <TextField
                  id="outlined-basic"
                  label="Option 2"
                  variant="outlined"
                  name="opt2"
                  onChange={(e) =>
                    setQuestion({ ...question, opt2: e.target.value })
                  }
                />
                <TextField
                  id="outlined-basic"
                  label="Option 3"
                  variant="outlined"
                  name="opt3"
                  onChange={(e) =>
                    setQuestion({ ...question, opt3: e.target.value })
                  }
                />
                <TextField
                  id="outlined-basic"
                  label="Option 4"
                  variant="outlined"
                  name="opt4"
                  onChange={(e) =>
                    setQuestion({ ...question, opt4: e.target.value })
                  }
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

        {pollData.map((item) => {
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
                  onClick={() => handleTitleEdit(item._id, item.title)}
                >
                  Update Title
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  onClick={() => handleAddOption(item._id)}
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
                  {/* {deletePoll ||editPoll ? (
                    <FormGroup >
                      <FormControlLabel control={<Checkbox />}   />
                    </FormGroup>
                  ) : (
                    ""
                  )} */}
                {/* {editPoll? <input type="text" name="text" onChange={(e)=>setQuestion({...question, text:e.target.value})} />:( {item.title})} */}
                  Q . {item.title}?
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
        })}
      </div>
    </>
  );
}
