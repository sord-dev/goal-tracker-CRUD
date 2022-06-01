import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

function Tracker() {

    const cardStyles = { width: '275px', marginTop: '90px'}

    const handleDelete = () => {
        console.log('del')
      }
    
      const handleUpdate = () => {
        console.log('update')
      }

  return (
    <div>
    
    <Card sx={cardStyles}>
    <CardContent>
      <Typography variant="h5" component="div">
        name
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        catagory 
      </Typography>
      <Typography variant="body2">
        desc       
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={handleDelete}>delete</Button>
      <Button size="small" onClick={handleUpdate}>update</Button>
    </CardActions>
  </Card>
    
    </div>
  )
}

export default Tracker