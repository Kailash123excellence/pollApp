import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { pollRequest } from '../redux/action/index';
import pollReducer from '../redux/reducers/viewPoll';


import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import ResponsiveAppBar from './navbar';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


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
  console.log(pollSelector.data, "1212");

useEffect(()=>{

dispatch(pollRequest())
},[])

  return (
    <>
     <div className='pollContainerOuter'>
      <ResponsiveAppBar/>
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
                            <Card sx={{ minWidth: 275 }}>
                              <CardContent>
                                <Typography
                                  sx={{ mb: 1.5 }}
                                  color="text.secondary"
                                >
                                  {val.option}
                                </Typography>
                              </CardContent>
                            </Card>

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
