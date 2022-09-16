import * as React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { requestSingUp } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       // {...props}
//     >
//     </Typography>
//   );
// }

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme();

export default function SignIn() {


  const [credential, setCredential] = useState({
    username: "",
    password: "",
    role: "guest",
  });

  // const [open, setOpen] = React.useState(false);
  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpen(false);
  // };



  const navigate= useNavigate()
  const dispatch = useDispatch();
  const signUpSelector = useSelector((state) => state && state.signUpReducer);
console.log(signUpSelector, "@@@@@@");

  function getSelect(e) {
    setCredential({ ...credential, role: e.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
      dispatch(
        requestSingUp({
          username: credential.username,
          password: credential.password,
          role: credential.role,
        })
      );

    
  };

 useEffect(() => {
  if(signUpSelector.isSuccess){
    navigate('/')

  }
 }, [signUpSelector.isSuccess]);




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
          <Avatar sx={{ m: 1, bgColor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="UserName"
              name="username"
              autoComplete="username"
              // autoFocus
              onChange={(e) =>
                setCredential({ ...credential, username: e.target.value })
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
                setCredential({ ...credential, password: e.target.value })
              }
            />

            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={credential.role}
                  label="Role"
                  onChange={getSelect}
                >
                  <MenuItem selected value={"guest"}>
                    Guest
                  </MenuItem>
                  <MenuItem value={"admin"}>Admin</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {signUpSelector.isLoading ? (
              <Box sx={{ display: "flex", ml: 20 }}>
                <CircularProgress />
              </Box>
            ) : (
              ""
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            {signUpSelector.isError ? (
              <Stack spacing={2} sx={{ width: "100%", marginTop: "10px" }}>
                <Alert severity="error">{signUpSelector.message}</Alert>
              </Stack>
            ) : (
              ""
            )}

            {/* {signUpSelector.isSuccess?
            navigate('/')
            :("")} */}

            <Grid container>
              <Grid item>
                <Link href="/" variant="body1">
                  {"Already have an account? Sign In"}
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



// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { requestSingUp } from "../redux/action";

// export default function SignUp() {
//   const dispatch = useDispatch();
//   const signUpSelector = useSelector((state) => state && state.signUpReducer);
//   console.log(signUpSelector.data, "555555");

//   const [credential, setCredential] = useState({
//     username: "",
//     password: "",
//     role: "guest",
//   });

//   function getSelect(e) {
//     setCredential({ ...credential, role: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch(
//       requestSingUp({
//         username: credential.username,
//         password: credential.password,
//         role: credential.role,
//       })
//     );
    
//   }

//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className="registerFrom">
//         <div className="registerContainer">
//           <form className="inputForm" onSubmit={handleSubmit}>
//             <h1 className="formHeading">Register</h1>
//             <div className="mb-3">
//               <label className="form-label">UserName</label>
//               <input
//                 type="text"
//                 name="username"
//                 required
//                 className="form-control"
//                 placeholder="Enter Username"
//                 onChange={(e) =>
//                   setCredential({ ...credential, username: e.target.value })
//                 }
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input
//                 required
//                 type="password"
//                 name="password"
//                 className="form-control"
//                 placeholder="Enter Password"
//                 onChange={(e) =>
//                   setCredential({ ...credential, password: e.target.value })
//                 }
//               />
//             </div>

//             <label className="form-label">Role</label>
//             <select
//               className="form-select mb-2"
//               aria-label="Default select example"
//               onChange={getSelect}
//             >
//               <option value="guest">Guest</option>
//               <option value="admin">Admin</option>
//             </select>

//             <button type="submit" className="btn btn-primary w-100">
//               Submit
//             </button>
//           </form>
//           <p className="loginLink">
//             Already have an account? <Link to="/login">Login In</Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
