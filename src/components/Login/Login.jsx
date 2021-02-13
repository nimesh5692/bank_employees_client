import React, {useState} from 'react'
import stylesheet from "./styles";

import { Container, Paper, Grid, TextField, Typography, Button, AppBar } from "@material-ui/core";

import emp_main_img from "../../images/emp_main_img.png";

import { useDispatch } from "react-redux";
import { login } from "../../actions/user";


const Login = () => {

  const [empData, setEmpData] = useState({
    emp_email: '',
    emp_pw: '',
  });

  const dispatch = useDispatch();

  const styles = stylesheet();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(login(empData));
    } catch (error) {
      console.log(error);
    } finally {
      setEmpData({
        emp_email: '',
        emp_pw: '',
      });
    }
  }

  const handleValueChange = (e) => {
    const targetInput = e.target;
    const inputName = targetInput.name;
    const inputValue = targetInput.value;

    setEmpData({
      ...empData,
      [inputName]: inputValue,
    });
  }

  return (
    <Paper className={styles.paper}>
      <Container>
        <AppBar className={styles.appBar} position="static" color="inherit">
          <Typography className={styles.heading} variant="h2" align="center">
            Employees
          </Typography>
          <img
            className={styles.image}
            src={emp_main_img}
            alt="bank_employees"
            height="50"
          />
        </AppBar>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Typography variant="h6">
            Login
          </Typography>
            <Container>
              <Grid
                container
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth={true}
                    name="emp_email"
                    label="Email"
                    type="email"
                    value={empData.emp_email}
                    onChange={handleValueChange}
                    autoComplete="off"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justify="center"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth={true}
                    name="emp_pw"
                    label="Password"
                    type="password"
                    value={empData.emp_pw}
                    onChange={handleValueChange}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                justify="center"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item xs={12} sm={6}>
                  <Button fullWidth type="submit" variant="contained" color="primary">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Container>
        </form>
      </Container>
    </Paper>
  )
}

export default Login
