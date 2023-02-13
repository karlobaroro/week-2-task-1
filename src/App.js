import React from 'react';
import DisplayEmployee from './Components/DisplayEmployee';
import DisplayEmployeeFunction from './Components/DisplayEmployeeFunction';
import { Grid } from '@mui/material/';

const App = () => {
    return (
        <div>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <p style={{fontSize:"30px",fontFamily:"Arial",fontWeight:"bold"}}>Using Class Based Component</p>
            <DisplayEmployee />
            
            <p style={{fontSize:"30px",fontFamily:"Arial",fontWeight:"bold"}}>Using Function Based Component</p>
            <DisplayEmployeeFunction />
        </Grid>
      </Grid>
        </div>
    );
};

export default App;