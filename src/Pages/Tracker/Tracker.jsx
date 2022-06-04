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
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import Goal from "./components/Goal";

import FirestoreProvider from '../../firebase.js'
import Action from "./components/Action";



function Tracker() {
  const [goals, setGoals] = useState([]);
  const [open, setOpen] = useState(false);

  const [goalNameInput, setGoalNameInput] = useState();
  const [goalCatagoryInput, setGoalCatagoryInput] = useState();
  const [goalDescInput, setGoalDescInput] = useState();

  const [goalNameEdit, setGoalNameEdit] = useState();


  const handleFormSubmit = async () => {
    const ans = {
      name: goalNameInput,
      cat: goalCatagoryInput,
      desc: goalDescInput
    }

    console.log(ans)

    try {
     await FirestoreProvider.store(ans)
     handleFormClose()
     console.log('file uploaded succesfully')
    } catch (error) {
      console.log('there was an error, ', error.code)
    }
  }


// handle update feature 

  const handleFormUpdate = () => {
    const id = goalNameEdit.id;
    const update = {
      name: goalNameInput ?  goalNameInput : goalNameEdit.name,
      cat: goalCatagoryInput ? goalCatagoryInput : goalNameEdit.cat,
      desc: goalDescInput ? goalDescInput : goalNameEdit.desc
    }

    try {
      await FirestoreProvider.update(id, update)
      handleFormClose()
      console.log('file updated succesfully')
    } catch (error) {
      console.log('there was an error, ', error.code)
      
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

  const handleUpdate = async (id) => {
    const data = await (await FirestoreProvider.get(id)).data()
    setGoalNameEdit({
      id,
      name: data.name,
      cat: data.cat,
      desc: data.desc
    })
    setOpen(true)
  };


  //form 
  const handleForm = () => {
    setOpen(true);
  };

  const handleFormClose = () => {
    setOpen(false);
    setGoalNameEdit('')
  };



async function getGoals() {
    const data = await FirestoreProvider.getAll()
    return data
  }

  const CATAGORIES = ['Chores','Exercise','Education','Work']
  const editGoalMsg = 'To edit a goal already in the database of this website, please enter the new details for it here. \n The page should reload and your updated goal will be displayed on the main page.'
  const addGoalMsg = 'To add a goal to this website, please enter the details for it here. \n The page should reload and your new goal will be displayed on the main page.'

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        {goals.map((goal) => (
          <Grid key={goal.id} item>
            <Goal
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
        <DialogTitle>{ goalNameEdit ? "Edit Goal" : "Add Goal" }</DialogTitle>
        <DialogContent>
          <DialogContentText>
          { goalNameEdit ? editGoalMsg : addGoalMsg }
            
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
            defaultValue={ goalNameEdit ? goalNameEdit.name : ''}
          />

          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Catagory
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: "catagory",
                id: "uncontrolled-native",
              }}
              onChange={(e) => setGoalCatagoryInput(e.target.value)}
              defaultValue={ goalNameEdit ? goalNameEdit.cat : ''}
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
            defaultValue={ goalNameEdit ? goalNameEdit.desc : ''}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose}>Cancel</Button>
          <Button onClick={goalNameEdit ? (id) => handleFormUpdate(id) : handleFormSubmit}>{ goalNameEdit ? "Update" : "Upload"}</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Tracker;
