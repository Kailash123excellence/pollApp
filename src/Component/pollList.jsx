import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { pollRequest } from '../redux/action/index';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Navbar from './navbar';
import Radio from "@mui/material/Radio";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);



export default function PollList() {
const [selectedValue, setSelectedValue] = React.useState("a");
  const dispatch = useDispatch();
  const pollSelector = useSelector((state) => state && state.pollReducer);
  console.log(pollSelector.data, "1212");

useEffect(()=>{

dispatch(pollRequest())
},[])

  return (
    <>
          
      <Navbar/>
     <div className='pollContainerOuter'>
          <div className='pollContentInner'>
            
            {pollSelector.isSuccess?
            
            pollSelector.data.data.map((item,index)=>{
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
                              <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                  <Radio
                                    checked={selectedValue === "a"}
                                    onChange={"handleChange"}
                                    value="a"
                                    name="radio-buttons"
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

                            {/* <Paper sx={{ width: 320 }}>
                              <MenuList dense>
                                <MenuItem>
                                  <ListItemText inset>
                                    {val.option}
                                  </ListItemText>
                                </MenuItem>
                              </MenuList>
                            </Paper> */}

                            {/* <p key={index} className="pollListOption">
                              {val.option}
                            </p> */}
                          </>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })
            
            :" "

            }
          
          </div>
     </div>
    </>
  )
}
