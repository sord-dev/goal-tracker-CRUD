import { Grid, Container, Fab, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Goal from "./components/Goal";

import data from "../../dummygoals";
import { Add } from "@mui/icons-material";

function Tracker() {
  const [goals, setGoals] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setGoals(data);
  }, []);

  const handleDelete = (e) => {
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
  };

  const handleUpdate = () => {
    console.log("update");
  };

  const handleForm = () => {
    setOpen(true);
  };

  const handleFormClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        {goals.map((goal, index) => (
          <Grid item>
            <Goal
              key={(index += 1)}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              goalName={goal.goalName}
              goalCatagory={goal.goalCatagory}
              goalDescription={goal.goalDescription}
            />
          </Grid>
        ))}
      </Grid>

      <Fab
        color="primary"
        sx={{ position: "fixed", bottom: "15px", right: "15px", zIndex: "999" }}
        onClick={handleForm}
      >
        <Add></Add>
      </Fab>

      <Dialog open={open} onClose={handleFormClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose}>Cancel</Button>
          <Button onClick={handleFormClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Tracker;
