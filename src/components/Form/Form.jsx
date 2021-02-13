import React, {useState, useEffect} from 'react'
import stylesheet from "./styles";

import { Container, Paper, Grid, TextField, Select, InputLabel, MenuItem, Typography, Button } from "@material-ui/core";

import FileBase from 'react-file-base64';

import { useDispatch, useSelector } from "react-redux";
import { createEmployee } from "../../actions/employees";


const Form = () => {

  const [empData, setEmpData] = useState({
    emp_name: '',
    emp_email: '',
    emp_pw: '',
    emp_address: '',
    emp_photo: '',
    branch: '',
  });

  const dispatch = useDispatch();

  
  const branchList = useSelector((state) => {
    return state.branches;
  })

  const styles = stylesheet();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(createEmployee(empData));
    } catch (error) {
      console.log(error);
    } finally {
      setEmpData({
        emp_name: '',
        emp_email: '',
        emp_pw: '',
        emp_address: '',
        emp_photo: '',
        branch: '',
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

  const handleFileUpload = (e) => {

    setEmpData({
      ...empData,
      emp_photo: e.base64,
    });
  }

  return (
    <Paper className={styles.paper}>
      <Container>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Typography variant="h6">
            New Employee
          </Typography>
            <Container>
              <Grid
                container
                justify="space-between"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth={true}
                    name="emp_name"
                    label="Name"
                    value={empData.emp_name}
                    onChange={handleValueChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
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
                <Grid item xs={12} sm={4}>
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
                justify="space-between"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth={true}
                    name="emp_address"
                    label="Address"
                    value={empData.emp_address}
                    onChange={handleValueChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <InputLabel id="branch">&nbsp;</InputLabel>
                  <Select
                    fullWidth={true}
                    id="branch"
                    name="branch"
                    label="Branch"
                    displayEmpty
                    value={empData.branch}
                    onChange={handleValueChange}
                  >
                    <MenuItem value={''} disabled style={{color: '#000'}}>
                      <em>Select branch</em>
                    </MenuItem>
                    {
                      branchList.map(row => {
                        return (
                          <MenuItem key={row._id} value={row._id}>{row.bank.name} - {row.name}</MenuItem>
                        );
                      })
                    }
                  </Select>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <br/>
                    <InputLabel>Picture</InputLabel>
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={handleFileUpload}
                    />
                </Grid>
              </Grid>
              <Grid
                container
                justify="space-between"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item xs={12} sm={6}>
                  <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
                </Grid>
              </Grid>
            </Container>
        </form>
      </Container>
    </Paper>
  )
}

export default Form
