import { Add } from '@mui/icons-material'
import { Fab } from '@mui/material'
import React from 'react'

function Action(props) {
    const {handleForm} = props 

  return (
     <Fab
        color="primary"
        sx={{ position: "fixed", bottom: "15px", right: "15px", zIndex: "999" }}
        onClick={handleForm}
      >
        <Add></Add>
      </Fab>
  )
}

export default Action