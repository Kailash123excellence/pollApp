import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pollRequest, votePollRequest } from "../redux/action/index";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Navbar from "./navbar";
import Radio from "@mui/material/Radio";
import CircularProgress from "@mui/material/CircularProgress";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function PollList() {
  const dispatch = useDispatch();
  const pollSelector = useSelector((state) => state && state.pollReducer);

  const token = localStorage.getItem("token");

  // const [voteDisable, setVoteDisable] = useState(false);
  // const [clickedID, setClickedID] = useState([]);
  const [selected, setSelected] = useState("no");
  
  // const [voteID, setVoteID] = useState({
  //   id: "",
  //   text: "",
  // });
  // console.log(voteID, "vote");
  const handleChange = (id, text) => {
    // setVoteID({ id: id, text: text });
    // setVoteDisable(true);
    // setClickedID(id);
    {
      pollSelector.data.data.map((val) => {
        if (val._id === id) {
          {
            val.options.map((item) => {
              
              item.vote = 1;

            });
          }
        }
      });
    }

    dispatch(votePollRequest(id, text));
  };

  useEffect(() => {
    dispatch(pollRequest());
  }, []);
  return (
    <>
      <Navbar />
      <div className="pollContainerOuter">
        <div className="pollContainerInner">
          {pollSelector.isSuccess ? (
            pollSelector.data.data.map((item, index) => {
              return (
                <>
                  <div key={index} className="pollListArea">
                    <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {item.title}
                        </Typography>
                      </CardContent>
                    </Card>
                    {/* <p className="pollQuestion"> {item.title}</p> */}
                    <div>
                      {item.options.map((val, index) => {
                        return (
                          <>
                            <div key={index}>
                              <Card
                                sx={{
                                  minWidth: 275,
                                }}
                              >
                                <CardContent
                                  sx={{
                                    minWidth: 275,
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <Radio
                                    type="radio"
                                    checked={val.vote ? true : false}
                                    onChange={() =>
                                      handleChange(item._id, val.option)
                                    }
                                    disabled={val.vote ? true : false}
                                    value={val.option}
                                    name={item._id}
                                    // name="radio-buttons"
                                    inputProps={{ "aria-label": "A" }}
                                  />

                                  <Typography
                                    // sx={{ mb: 1 }}
                                    color="text.secondary"
                                  >
                                    {val.option}
                                  </Typography>
                                </CardContent>
                              </Card>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <Box sx={{ display: "flex",thickness:10, justifyContent: "center", ml: 20 ,mt:50}}>
              <CircularProgress />
            </Box>
          )}
        </div>
      </div>
    </>
  );
}
