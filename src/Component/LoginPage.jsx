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

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRole = localStorage.getItem("role");
  const loginSelector = useSelector((state) => state && state.logInReducer);
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (userRole) {
      navigate("/pollApp");
    }
  }, [userRole]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userLogin.username.trim() && userLogin.password.trim()) {
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
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={userLogin.username}
              autoComplete="username"
              autoFocus
              onChange={(e) =>
                setUserLogin({ ...userLogin, username: e.target.value.trim() })
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={userLogin.password}
              type="password"
              id="password"
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value.trim() })
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
                <Alert severity="error">
                  Account don't exist Kindly check Username or Password
                </Alert>
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
      </Container>
    </ThemeProvider>
  );
}
