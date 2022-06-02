import {
  Grid,
  Container,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
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


  const CATAGORIES = ['Chores','Exercise','Education','Work']

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
            To add a goal to this website, please enter the details for it here.
            The page should reload and your new goal will be displayed on the main page.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="goalName"
            label="Goal Name"
            type="text"
            fullWidth
            variant="standard"
          />

          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Catagory
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >

            {CATAGORIES.map((cat) => <option value={{cat}}>{cat}</option>)}
            </NativeSelect>
          </FormControl>

          <TextField
            autoFocus
            margin="dense"
            id="goalDesc"
            label="Goal Description"
            type="text"
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
