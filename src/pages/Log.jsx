import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './style/transaction.css'

function Transaction() {
  return (
    <div className='Transaction-main'>
        <div className="page-title">
          Transaction
        </div>
        
        <div className="headline">
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
                <Paper elevation={0}
                sx={{
                    backgroundColor : '#f1f1f4',
                  }}
              >
                <div className="headline-wrapper">
                    <div className="headline-date">
                        <span className='text'>
                            Date
                        </span>
                    </div>
          
                    <div className='headline-category'>
                        <span className='text'>
                            Category
                        </span>
                    </div>
          
                    <div className='headline-editing'>
                        <span className='text'>
                            Editing
                        </span>
                    </div>

                    <div className="headline-amount">
                        <span className='text'>
                            Amount
                        </span>
                    </div>
                </div>
                </Paper>
            </Box>
        </div>

       <div className="item-section">   
        
        {/* cards per day */}
        
        <div className="t-card-item">
            <div className="item">
                <div className="t-day">
                    <span>
                        Today
                    </span>
                </div>

                <div className="transaction-cards">
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
                    <div className="t-paper-wrapper">
                        <div className="t-date">
                            <span className='text'>
                                Date
                            </span>
                        </div>
            
                        <div className='t-category'>
                            <span className="icon">
                                icon
                            </span>
                            <span className='text'>
                                Category
                            </span>
                        </div>
            
                        <div className='t-editing'>
                            <span className="edit-icon">
                                Edit
                            </span>
                            <span className='delete-icon'>
                                Delete
                            </span>
                        </div>

                        <div className="t-amount">
                            <span className='text'>
                                Amount
                            </span>
                        </div>
                    </div>
                    </Paper>
                    </Box>
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
                    <div className="t-paper-wrapper">
                        <div className="t-date">
                            <span className='text'>
                                Date
                            </span>
                        </div>
            
                        <div className='t-category'>
                            <span className="icon">
                                icon
                            </span>
                            <span className='text'>
                                Category
                            </span>
                        </div>
            
                        <div className='t-editing'>
                            <span className="edit-icon">
                                Edit
                            </span>
                            <span className='delete-icon'>
                                Delete
                            </span>
                        </div>

                        <div className="t-amount">
                            <span className='text'>
                                Amount
                            </span>
                        </div>
                    </div>
                    </Paper>
                    </Box>
                </div>
            </div>
        </div>
        
        {/* cards per day */}
        <div className="t-card-item">
            <div className="item">
                <div className="t-day">
                    <span>
                        Today
                    </span>
                </div>

            <div className="transaction-cards">
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
                <div className="t-paper-wrapper">
                    <div className="t-date">
                        <span className='text'>
                            Date
                        </span>
                    </div>
          
                    <div className='t-category'>
                        <span className="icon">
                                icon
                            </span>
                        <span className='text'>
                            Category
                        </span>
                    </div>
          
                    <div className='t-editing'>
                        <span className="edit-icon">
                                Edit
                            </span>
                            <span className='delete-icon'>
                                Delete
                            </span>
                    </div>

                    <div className="t-amount">
                        <span className='text'>
                            Amount
                        </span>
                    </div>
                </div>
                </Paper>
                </Box>
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
                <div className="t-paper-wrapper">
                    <div className="t-date">
                        <span className='text'>
                            Date
                        </span>
                    </div>
          
                    <div className='t-category'>
                        <span className="icon">
                                icon
                            </span>
                        <span className='text'>
                            Category
                        </span>
                    </div>
          
                    <div className='t-editing'>
                        <span className="edit-icon">
                                Edit
                            </span>
                            <span className='delete-icon'>
                                Delete
                            </span>
                    </div>

                    <div className="t-amount">
                        <span className='text'>
                            Amount
                        </span>
                    </div>
                </div>
                </Paper>
                </Box>
            </div>
            </div>
        </div>
       
       </div>
    </div>
  )
}

export default Transaction