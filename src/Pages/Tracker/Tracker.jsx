import { Container } from '@mui/material'
import React from 'react'
import Goal from './components/Goal'

import data from '../../dummygoals'

function Tracker() {


    const handleDelete = () => {
        console.log('del')
    }
    
      const handleUpdate = () => {
        console.log('update')
    }

  return (
    <Container maxWidth='xl' sx={{ display: 'grid', justifyContent: { xs: 'center', lg: 'left'}, gridColumnTemplate: '1fr 1fr 1fr'}}>

    {data.map((goal) => <Goal handleDelete={handleDelete} handleUpdate={handleUpdate} goalName={goal.goalName} goalCatagory={goal.goalCatagory} goalDescription={goal.goalDescription} />)}
    </Container>
  )
}

export default Tracker