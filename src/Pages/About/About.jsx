import { Info } from '@mui/icons-material'
import { Avatar, Container, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../Tracker/components/NavBar'

function About() {
  const pStyles =  {opacity: '.8', fontSize: '1.1em'}
  return (
    <>
    <NavBar />

    <Container align='center' sx={{marginTop: '120px'}}>
        <Avatar sx={{ bgcolor: "#42a5f5" }}><Info/></Avatar>

        <Typography variant='h1' className='about-title'  sx={{marginTop: '5px', fontWeight: '500'}} gutterBottom>About</Typography>

        <Typography variant='p' sx={pStyles} gutterBottom paragraph>After using CRA [create react app] for a while, I ran into a problem with pollyfilling in webpack and it made me realise how little I knew about building react applications, in order to build my comprenesion I thought it'd be a good idea to mess around with Vite.</Typography>

        <Typography variant='h3' sx={{marginTop: '1em', fontWeight: '500'}} gutterBottom>What is Vite?</Typography>
        <Typography variant='p' sx={pStyles}>Vite, which was created by Evan You, the creator of the Vue.js framework, is next-generation frontend tooling that provides a blazing-fast dev server, bundling and a great developer experience. When I say fast, I mean it—as start-up times can decrease tenfold in comparison to other tools, such as webpack, Rollup or Parcel.</Typography>


    </Container>

    </>
  )
}

export default About