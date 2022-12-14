import * as React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Navbar from "./navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { borders } from "@mui/system";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Radio from "@mui/material/Radio";

import TablePagination from "@mui/material/TablePagination";

import { useDispatch, useSelector } from "react-redux";
import {
  pollRequest,
  deletePollRequest,
  removeOptionRequest,
  votePollRequest,
} from "../redux/action";

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

  // pagination details

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const indexOfFirstPost = page * rowsPerPage;
  const indexOfLastPost = indexOfFirstPost + rowsPerPage;
  const currentPosts = pollData.slice(indexOfFirstPost, indexOfLastPost);

  const totalPost = pollData.length;

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
    {
      pollSelector.data.data.map((val) => {
        if (val._id === id) {
          {
            val.options.map((item,index) => {
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

  const submitRemoveOption = (id, text) => {
    setRemoveText({
      id: id,
      text: text,
    });
    dispatch(removeOptionRequest(id, text));
  };

  useEffect(() => {
    checkLastOption();
  }, [removeSelector.isSuccess]);

  function checkLastOption() {
    pollData.map((values) => {
      if (values._id === removeText.id) {
        return values.options.length - 1 === 0
          ? dispatch(deletePollRequest(removeText.id))
          : "";
      }
    });
  }

  const addNewPoll = () => {
    dispatch(pollRequest());
    navigate("/addNewPoll");
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
            spacing={2}
            m={5}
          >
            <button className="addBtn" onClick={addNewPoll}>
              ADD POLL
            </button>
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
                    boxShadow: "10px 10px 20px #8eb1e8",
                    mb: 5,
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
                            <table>
                              <tr key={index}>
                                <th></th>
                                <th>vote</th>
                              </tr>
                              <tr>
                                <td>{val.option}</td>
                                <td>{val.vote}</td>
                                <td>
                                  <div className="editOptionBtn">
                                    {removeSelector.isLoading ? (
                                      <>
                                        {val.option === removeText.text &&
                                        item._id == removeText.id ? (
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
                                    inputProps={{ "aria-label": "A" }}
                                  />

                                  <Typography color="text.secondary">
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

        <div className="pagination">
          <TablePagination
            className="tablePagination"
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={totalPost}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </>
  );
}
