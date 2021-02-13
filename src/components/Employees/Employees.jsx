import React from 'react'

import { Grid, CircularProgress } from "@material-ui/core";

import { useSelector } from "react-redux";

import Employee from './EmployeeCard/EmployeeCard';
import stylesheet from "./styles";

const Employees = () => {

  const employeeList = useSelector((state) => {
    return state.employees;
  })

  const branchList = useSelector((state) => {
    return state.branches;
  })

  console.log(employeeList);

  const styles = stylesheet();
  return (
    (!employeeList.length)
    ? (
        <Grid className={styles.mainContainer} container alignItems="center" spacing={3}>
          <CircularProgress />
        </Grid>
      )
    : (
      <Grid className={styles.mainContainer} container alignItems="stretch" spacing={3}>
        {
          employeeList.map(row => (
            <Grid item key={row._id} xs={12} sm={3}>
              <Employee employeeData={row} />
            </Grid>
          ))
        }
      </Grid>
    )
  )
}

export default Employees
