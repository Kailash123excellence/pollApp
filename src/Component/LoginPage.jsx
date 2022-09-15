import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestLogin } from "../redux/action";
import { useNavigate } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>
//       {new Date().getFullYear()}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  const loginSelector = useSelector((state) => state && state.logInReducer);
  // console.log(loginSelector,"loginSelector")

  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const navigator = useNavigate();

  const userRole = localStorage.getItem("role");
  // console.log(userRole, "5555 role")

  // useEffect(() => {
  //   if (loginSelector.isSuccess) {
  //     if (loginSelector.data.error === 0 && userRole == "admin") {
  //       navigator("/adminPanel");
  //     } else if (loginSelector.data.error === 0) {
  //       navigator("/pollList");
  //     }
  //   }
  // }, [loginSelector.isSuccess]);

  useEffect(() => {
    if (loginSelector.isSuccess) {
      if (loginSelector.data.error === 0 && userRole == "admin") {
        navigator("/adminPanel");
      } else if (loginSelector.data.error === 0) {
        navigator("/pollList");
      }
    }
  }, [loginSelector.isSuccess]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userLogin.username.length && userLogin.password.length) {
      dispatch(
        requestLogin({
          username: userLogin.username,
          password: userLogin.password,
        })
      );
    }
     
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) =>
                setUserLogin({ ...userLogin, username: e.target.value })
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="current-password"
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
            />

            {loginSelector.isLoading ? (
              <Box sx={{ display: "flex", ml: 20 }}>
                <CircularProgress />
              </Box>
            ) : (
              ""
            )}

            {loginSelector.isError ? (
              <Stack spacing={2} sx={{ width: "100%", marginTop: "10px" }}>
                <Alert severity="error">Account don't exist Kindly check Username or Password</Alert>
              </Stack>
            ) : (
              ""
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signUp" variant="body1">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link ,useNavigate} from "react-router-dom";
// import {requestLogin} from '../redux/action/index'

// export default function LoginPage() {
//   const navigator= useNavigate()
//   const dispatch = useDispatch();
// const loginSelector = useSelector((state) =>state&& state.logInReducer);
// // console.log(loginSelector);
// const userRole= localStorage.getItem("role")
// console.log(userRole);

// useEffect(()=>{
//   if(loginSelector.isSuccess){
//     if(userRole=='Admin'){
//       navigator('/adminPanel')
//     }else{
//       navigator('/pollDeshboard')
//     }

//   }
// },[loginSelector])

// const[userLogin,setUserLogin]=useState({
//     username:"",
//     password:""

//   })

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch(requestLogin({
//       username:userLogin.username,
//       password:userLogin.password
//     }));
//   }

//   return (
//     <>

//       <div className="registerFrom">
//         <div className="registerContainer">
//           <form className="inputForm" onSubmit={handleSubmit}>
//             <h1 className="formHeading">Login</h1>
//             <div className="mb-3">
//               <label className="form-label">UserName</label>
//               <input
//                 required
//                 name="username"
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter Username"
//                 onChange={(e) => setUserLogin({...userLogin, username:e.target.value})}
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input
//                 required
//                 name="password"
//                 type="password"
//                 className="form-control"
//                 placeholder="Enter Password"
//                 onChange={(e) => setUserLogin({...userLogin, password:e.target.value})}
//               />
//             </div>
//             <button type="submit" className="btn btn-primary w-100">
//               Submit
//             </button>
//           </form>
//           <p className="loginLink">
//             Not a Member <Link to="/signUp">SignUp</Link>
//           </p>
//         </div>

//       </div>
//     </>
//   );
// }
