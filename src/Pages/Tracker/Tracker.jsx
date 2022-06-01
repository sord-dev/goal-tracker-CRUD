import { Grid, Container, Fab } from "@mui/material";
import React from "react";
import Goal from "./components/Goal";

import data from "../../dummygoals";
import { Add } from "@mui/icons-material";

function Tracker() {
  const handleDelete = () => {
    console.log("del");
  };

  const handleUpdate = () => {
    console.log("update");
  };

  const handleForm = () => {
      console.log('form');
  }

  return (
    <Container maxWidth="xl">


      <Grid container sx={{margin: '0', overflow: 'none'}} spacing={4}>
        {data.map((goal, index) => (
          <Grid item>
            <Goal
              key={index += 1}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              goalName={goal.goalName}
              goalCatagory={goal.goalCatagory}
              goalDescription={goal.goalDescription}
            />
          </Grid>
        ))}
      </Grid>


            <Fab color='primary' sx={{position: 'fixed', bottom: '15px', right: '15px', zIndex:'999'}} onClick={handleForm}>
                <Add></Add>
            </Fab>

    </Container>
  );
}

export default Tracker;
