import { Info } from '@mui/icons-material'
import { Avatar, Container, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Container align='center' sx={{marginTop: '95px'}}>
        <Avatar sx={{ bgcolor: "lightblue" }}><Info/></Avatar>

        <Typography variant='h1' className='about-title'  sx={{marginTop: '5px', fontWeight: '500'}} gutterBottom>About</Typography>

        <Typography variant='p' sx={{opacity: '.8', fontSize: '1.1em'}} paragraph>After using CRA [create react app] for a while, I ran into a problem with pollyfilling in webpack and it made me realise I knew little to nothing about configuration files, after promptly fixing the bug I decided to look into alternative react enviroment creaters and ran across vite, the rest is self explainatory </Typography>


    </Container>
  )
}

export default About