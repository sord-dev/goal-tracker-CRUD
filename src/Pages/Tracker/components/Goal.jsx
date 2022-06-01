import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'


function Goal(props) {
  const cardStyles = { width: '275px', marginTop: '90px'}
  const {handleUpdate, handleDelete, goalName, goalCatagory, goalDescription} = props

  return (
    <div>
    <Card sx={cardStyles}>
      <CardContent>
        <Typography variant="h5" component="div">
          {goalName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {goalCatagory}
        </Typography>
        <Typography variant="body2">
        {goalDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDelete}>
          delete
        </Button>
        <Button size="small" onClick={handleUpdate}>
          update
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default Goal;
