import React from 'react'

import { Typography, Card, CardContent, CardMedia, Container} from "@material-ui/core";

import stylesheet from "./styles";

const EmployeeCard = ({ employeeData }) => {
  const styles = stylesheet();
  return (
    <Card className={styles.card}>
      <CardMedia className={styles.media} image={employeeData.emp_photo} title={employeeData.emp_name} />
      <div className={styles.cardTitle}>
        <Typography variant="h6">{employeeData.emp_name}</Typography>
      </div>
      <CardContent>
        <Container className={styles.cardBody}>
          <Typography>Address: {employeeData.emp_address}</Typography>
          <Typography>Email: {employeeData.emp_email}</Typography>
          <Typography>Bank: {employeeData.branch.bank.name}</Typography>
          <Typography>Branch: {employeeData.branch.name}</Typography>
        </Container>
      </CardContent>
    </Card>
  )
}

export default EmployeeCard
