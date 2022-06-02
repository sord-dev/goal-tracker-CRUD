import React, { useState } from "react";

function Dialog() {
  const [open, setOpen] = useState(false);

  const [goalNameInput, setGoalNameInput] = useState();
  const [goalCatagoryInput, setGoalCatagoryInput] = useState();
  const [goalDescInput, setGoalDescInput] = useState();

  const handleFormSubmit = async () => {
    const ans = {
      name: goalNameInput,
      cat: goalCatagoryInput,
      desc: goalDescInput,
    };

    try {
      await FirestoreProvider.store(ans);
      console.log("file uploaded succesfully");
      handleFormClose();
    } catch (error) {
      console.log("file uploaded succesfully", error);
    }
  };

  const handleFormClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleFormClose}>
      <DialogTitle>Add Goal</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a goal to this website, please enter the details for it here.
          The page should reload and your new goal will be displayed on the main
          page.
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
            {CATAGORIES.map((cat) => (
              <option value={cat}>{cat}</option>
            ))}
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
  );
}

export default Dialog;
