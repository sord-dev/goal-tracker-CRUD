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

import FirestoreProvider from '../../firebase.js'
import Action from "./components/Action";



function Tracker() {
  const [goals, setGoals] = useState([]);
  const [open, setOpen] = useState(false);

  const [goalNameInput, setGoalNameInput] = useState();
  const [goalCatagoryInput, setGoalCatagoryInput] = useState();
  const [goalDescInput, setGoalDescInput] = useState();

  const handleFormSubmit = async () => {
    const ans = {
      name: goalNameInput,
      cat: goalCatagoryInput,
      desc: goalDescInput
    }

    try {
     await FirestoreProvider.store(ans)
     console.log('file uploaded succesfully')
     handleFormClose()
    } catch (error) {
      console.log('file uploaded succesfully', error)
    }
  }

  useEffect(() => {
    const goalres = getGoals()
    goalres.then((doc) => setGoals(doc.docs.map(
      (goal) => ({...goal.data(), id: goal.id})
    )))
  }, [goals]);

  const handleDelete = async (id) => {
    try {
      await FirestoreProvider.del(id)
      console.log('succesfully deleted goal', id)
    } catch (error) {
      console.log('you messed up bro ', id, error.code)
    }
  };

  const handleUpdate = () => {
    console.log("update");
  };


  //form 
  const handleForm = () => {
    setOpen(true);
  };

  const handleFormClose = () => {
    setOpen(false);
  };



async function getGoals() {
    const data = await FirestoreProvider.getAll()
    return data
  }

  const CATAGORIES = ['Chores','Exercise','Education','Work']

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        {goals.map((goal) => (
          <Grid item>
            <Goal
              key={goal.id}
              handleDelete={() => handleDelete(goal.id)}
              handleUpdate={() => handleUpdate(goal.id)}
              goalName={goal.name}
              goalCatagory={goal.cat}
              goalDescription={goal.desc}
            />
          </Grid>
        ))}
      </Grid>

     <Action handleForm={handleForm} />

      <Dialog open={open} onClose={handleFormClose}>
        <DialogTitle>Add Goal</DialogTitle>
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
            onChange={(e) => setGoalNameInput(e.target.value)}
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
              onChange={(e) => setGoalCatagoryInput(e.target.value)}
            >

            {CATAGORIES.map((cat) => <option value={cat}>{cat}</option>)}
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
            onChange={(e) => setGoalDescInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose}>Cancel</Button>
          <Button onClick={handleFormSubmit}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Tracker;
