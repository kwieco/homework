import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, Typography } from '@mui/material';
import PokeLogo from './PokeLogo.png'
import Search from "./Search";


export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" components="div" sx={{ flexGrow: 1 }}>
            <Link href='/'><img src={PokeLogo}  height='50' alt='name' /></Link>
          </Typography>
            <Search/>
          <Button color="inherit" href='/arena'>Arena</Button>
          <Button color="inherit" href='/favourite'>Favourite</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}