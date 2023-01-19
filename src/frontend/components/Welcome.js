import * as React from 'react';
import {  useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import candidate from '../assets/images/candidate.jpg'
import Button from '@mui/material/Button';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});



export default function Welcome() {
  const [users, setUsers] = useState([]);
  useEffect(()=> {
      fetch ('http://127.0.0.1:5500/src/apis/users.json') //usamos liveserver para hacer la conexion
      .then((response) => response.json())
      .then ((data)=> {
        //  console.log(data);
          setUsers(data);
      })
      .catch((err)=>{
          console.lof(err.message);
      });
      ;
  },[]);

  return (

      <Grid container spacing={2}
            sx={{
              p: 2,
              boxShadow: 3,
              margin: 'auto',
              maxWidth: 600,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
               
            }} >
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Candidate" src={candidate} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Welcome 
              </Typography>
              <Typography variant="body2" gutterBottom>
              
              {users && users.map(user => (
            <Typography key={user.id}>
              ---Candidate {user.id}--- 
              <Typography >{user.firstName} {user.lastName}</Typography>
              <Typography >{user.email}</Typography>
              <Typography >Role: {user.role}</Typography>
              <Typography >id: {user.id}</Typography>

            </Typography>
          ))}

              </Typography>

              <Button variant="contained">Continuar</Button>
            </Grid>

          </Grid>
        </Grid>
      </Grid>

  );
}