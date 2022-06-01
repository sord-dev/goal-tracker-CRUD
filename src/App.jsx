import { AppBar, Button, CssBaseline, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { Outlet, useNavigate } from 'react-router-dom';


function App() {
  let navigate = useNavigate();
  const appbarStyles = { display: 'flex', gap: '1rem', justifyContent: 'space-between'}


  return (
    <div className="App">
      <CssBaseline />
      <AppBar>
        <Toolbar sx={appbarStyles}>
          <Tooltip title="Goals">
            <Typography variant='h4' onClick={() => navigate('/tracker')}>sord-dev</Typography>
          </Tooltip>

          <Tooltip title="About">
            <IconButton  sx={{color: 'white'}} onClick={() => navigate('/about')} >
              <HelpCenterIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>


      <Outlet />


    
    </div>
  )
}

export default App
