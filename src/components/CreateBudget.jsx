import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { Input, InputAdornment, TextField } from '@mui/material';

import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

import './addExpense.css'

/* _____________________________________________________ */

const Background = styled.div`
  margin-top: -30px; 
  margin-left: -30rem; 
  width: 50%;
  height: 50%;
  position: absolute;
  align-items: center;
  z-index: 1;
`;

const ExpenseWrapper = styled.div`
  width: 400px;
  height: 225px;
  margin-left: -20px; 
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;


const ExpenseContent = styled.div`
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    padding: 10px 24px;    
  }
`;

const CloseModalButton = styled(CloseIcon)`
  cursor: pointer;
  position: relative;
  margin-left: -6px;
  margin-top: -20px;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 5px;
  z-index: 10;
`;


/* _____________________________________________________ */

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );

      const Expense = ({showExpense, setaddBudget}) => {
    
        
    const [value, setValue] = React.useState(new Date());

        return (<> {showExpense ?( 
    
    <Background>  
      <ExpenseWrapper showExpense={showExpense}>
        
        <ExpenseContent>
      <Card
      elevation={20} 
      sx={{ width: 765 }}>
      <CardContent
      >        
        {/*  <div className="addexpense-input">
          <Input placeholder="Placeholder"/> 
        </div> */}
                <div className="exp-main">
                  <div className="top">
                    Enter Budget
                  </div>
                  <div className="">
                    <div className="">
                    <div className="">
                        <input className='amt' type="text" placeholder="Enter Budget Name" />
                      </div>


                      <div className="">
                        <input className='amt' type="number" placeholder="Enter Amount" />
                      </div>
                      <div className="descriptio">

                      </div>
                    </div>
                    <div className="right-comp">
                      <div className="calender">
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                          orientation="landscape"
                          openTo="day"
                          value={value}
                          shouldDisableDate={isWeekend}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                      </div>
                    </div>
                  </div>
                  <div className="sub-buttom">
                    <button type="submit" id="sub_butt">Add Expense</button>
                  </div>
                </div>

      </CardContent>
    </Card> 
     
    </ExpenseContent>

      <CloseModalButton
        aria-label='Close modal'
        onClick={() => setaddBudget(prev => !prev)}
      />

    </ExpenseWrapper>
      </Background>

      ) : null} </>
    )
    };
 
    export default Expense;
