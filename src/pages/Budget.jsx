import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './style/budget.css'

function Budget() {
  return (
    <div className='budget-main'>
      <div className="page-title">
        Budget
      </div>
      <div className="b-card-item">
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom : -1.5,
          '& > :not(style)': {
            m: 1,
            width: 'max',
            height: 60,
          },
        }}
      >
        <Paper>
          <div className="b-history-info">
          <div className="b-left-content">
            <div className="b-icon">
              icon
              </div>
          
          <div className="b-info">
            <div className="b-name">
              Budget 
              </div>
            <div className="b-amount">
            ₦ 500.00
              </div>
            </div>
            </div>
            <div className='spent'>
            <div className="b-info">
            <div className="s-amount">
            ₦ 500.00
              </div>
            <div className="s-tag">
             Money Spent
              </div>
            </div>
            </div>
            <div className='left'>
            <div className="b-info">
            <div className="s-amount">
               ₦ 500.00
              </div>
            <div className="l-tag">
              Money Left
              </div>
            </div>
            </div>
            
          
         
            </div>
          </Paper>
        </Box>

      </div>
    </div>
  )
}

export default Budget