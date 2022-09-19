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
  removeOptionRequest,
  votePollRequest,
} from "../redux/action";
import EditTitle from "./EditTitle";
import Pagination from './Pagination'
export default function FloatingActionButtons() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pollSelector = useSelector((state) => state && state.pollReducer);
   

  const [pollData, setPollData] = useState([]);

  const removeSelector = useSelector(
    (state) => state && state.removeOptionReducer
  );

  const deleteSelector = useSelector(
    (state) => state && state.deletePollReducer
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = pollData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  
  const user = localStorage.getItem("role");

  const [deletePoll, setDeletePoll] = useState("");

  const [removeText, setRemoveText] = useState({
    id: "",
    text: "",
  });

  const handleDelete = (id) => {
    setDeletePoll(id);
    dispatch(deletePollRequest(id));
  };
  
  const handleEdit = (id, text) => {
    localStorage.setItem("text", text);
    navigate(`/editTitle/${id}`);
  };

  const handleChange = (id, text) => {
    // setVoteID({ id: id, text: text });
    // setVoteDisable(true);
    // setClickedID(id);
    {
      pollSelector.data.data.map((val) => {
        if (val._id === id) {
          {
            val.options.map((item) => {
              item.vote = item.vote + 1;
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

  useEffect(() => {
    if (pollSelector?.isSuccess) {
      setPollData([...pollSelector.data.data.reverse()]);
    }
  }, [pollSelector.isSuccess]);
  
  // const handleEditOption = (e) => {
  //   setNewOption({ id: editOption, text: e.target.value });
  //   console.log(newOption);
  // };

  // const submitEditOption = (event) => {
  //   event.preventDefault();
  //   dispatch(
  //     newOptionRequest({
  //       id: newOption.id,
  //       text: newOption.text,
  //     })
  //   );
  //   setAddOption(!addOption);
  // };

  const submitRemoveOption = (id, text) => {
    setRemoveText({
      id: id,
      text: text,
    });

    dispatch(removeOptionRequest(id, text));
  };
 
 



  return (
    <>
      <div className="adminContainer">
        <Navbar />

        {user === "admin" ? (
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
        ) : (
          ""
        )}
        <div className="cardContainerAdmin">
          {pollData?.length > 0 ? (
            currentPosts?.map((item, index) => {
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
                    {user === "admin" ? (
                      <>
                        {deleteSelector.isLoading ? (
                          <>
                            {item._id === deletePoll ? (
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
                                onClick={() => handleDelete(item._id)}
                              ></Button>
                            )}
                          </>
                        ) : (
                          <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDelete(item._id)}
                          ></Button>
                        )}

                        <Button
                          variant="outlined"
                          startIcon={<EditIcon />}
                          onClick={() => handleEdit(item._id, item.title)}
                        ></Button>
                      </>
                    ) : (
                      ""
                    )}
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
                          {user === "admin" ? (
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
                                        {val.option === removeText.text && item._id== removeText.id ? (
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
                                          submitRemoveOption(
                                            item._id,
                                            val.option
                                          )
                                        }
                                      ></Button>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            </table>
                          ) : (
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
                          )}
                        </>
                      );
                    })}
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
        <Pagination postPerPage={postPerPage} totalPost={pollData.length} paginate={paginate} />
      </div>
    </>
  );
}
