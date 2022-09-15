import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router";
import Navbar from "./navbar";
import { pollRequest } from "../redux/action";
import { editPollTitleRequest } from "../redux/action";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";



export default function EditTitle() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
    const pollSelector = useSelector((state) => state && state.pollReducer);
    // console.log(pollSelector.data, "dadada");

useEffect(() => {
  dispatch(pollRequest());
}, []);

const titleText= localStorage.getItem("text")

    const [editable, setEditable] = useState({
      id: id,
      title:titleText,
    });


   const handleEditTitle = (e) => {
    
     setEditable({ ...editable, title: e.target.value });
   };


  function handleSubmitAddPoll() {
    dispatch(
      editPollTitleRequest({
        id: editable.id,
        title: editable.title,
      })
    );

    navigate("/adminPanel");
  }

  

  return (
    <div>
      <Navbar />

      <form className="addNewPollForm" onSubmit={handleSubmitAddPoll}>
        {pollSelector.isSuccess ? (
          pollSelector.data.data.map((val,index) => {
            return val._id === id ? (
              <>
              
              <input
              key={index}
                type="text"
                className="inputPollTitle"
                value={editable.title}
                onChange={(e) => handleEditTitle(e)}
                placeholder="Enter your poll question"
                />
              {val.options.map((item,index)=>{
                return (
                  <Box
                  key={index}
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
                    // onSubmit={(e) => submitEditOption(e)}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Option"
                      variant="outlined"
                      // variant="outlined"
                      name="opt"
                      value={item.option}
                      // onChange={(e) => handleEditOption(e)}
                    />
                  </Box>
                );
                
                
              })}



              <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
                </>

            ) : (
              ""
            );
          })
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center", ml: 20 }}>
            <CircularProgress />
          </Box>
        )}
        <Stack spacing={2} direction="row">
          {/* <Button
            variant="contained"
            color="primary"
            // onClick={handleOptionPoll}
          >
            Add Option
          </Button> */}
          {/* <Button variant="contained" color="success" type="submit">
            Submit
          </Button> */}
        </Stack>
      </form>
    </div>
  );
}
