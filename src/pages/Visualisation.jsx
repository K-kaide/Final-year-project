import React from 'react'
import './style/visualisation.css'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DoughnutChart from '../components/charts/DoughnutChart';
import VisLineChart from '../components/charts/VisLineChart'

function Visualisation () {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

  return (
    <div className='visualisation-wrapper'>

      <div className="top-content">
        <div className="page-title">
        Visualization
          </div>
          <div className="chart-section">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>        
                  <Item>
                         <DoughnutChart/>
                </Item>
              </Grid>
            </Grid>
          </Box>
          </div>
      
    </div>
      
      <div className="buttom-content">
        <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}
              >
                <Item sx={{
                  height: 470,       
                }}>
                  <VisLineChart/>
                </Item>
              </Grid>
            </Grid>
          </Box>
      </div>

    </div>
  )
}

export default Visualisation
