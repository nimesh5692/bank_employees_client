import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "./actions/employees";
import { getBranches } from "./actions/branches";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Employees from "./components/Employees/Employees";
import Form from "./components/Form/Form";
import Login from "./components/Login/Login";

import emp_main_img from "./images/emp_main_img.png";

import stylesheet from "./styles";

const App = () => {
  const user = useSelector((state) => {
    return state.user;
  });

  const employees = useSelector((state) => {
    return state.employees;
  });

  const dispatch = useDispatch();

  const styles = stylesheet();

  useEffect(() => {
    if (user.length) {
      dispatch(getEmployees());
      dispatch(getBranches());
    }
  }, [user, dispatch, employees]);

  if (user.length) {
    return (
      <Container maxWidth="lg">
        <AppBar className={styles.appBar} position="static" color="inherit">
          <Typography className={styles.heading} variant="h3" align="center">
            Employees
          </Typography>
          <img
            className={styles.image}
            src={emp_main_img}
            alt="bank_employees"
            height="50"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="flex-end"
              alignItems="flex-end"
              spacing={1}
            >
              <Typography className={styles.user} align="center">
                Logged in as:{" "}
                {user[0].emp_name.substring(0, user[0].emp_name.indexOf(" "))}
              </Typography>
            </Grid>
          </Container>
        </Grow>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={5}
            >
              <Grid item xs={12} sm={12}>
                <Form />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Employees />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    );
  } else {
    return <Login />;
  }
};

export default App;
