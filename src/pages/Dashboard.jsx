import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../pages/style/dashboard.scss'
import LineChart from '../components/charts/LineChart';
import DBhistory from '../components/DBhistory'
import AddExpense from '../components/AddExpense'
import AddIncome from '../components/AddIncome'
import CreateBudget from '../components/CreateBudget'

import ExpenseIcon from '../Assets/expense.png' 
import IncomeIcon from '../Assets/income.png'
import BudgetIcon from '../Assets/budget.png'
import IconButton from '@mui/material/IconButton';
import TBalance from '../Assets/tot balance.png'
import TIncome from '../Assets/target income.png'
import TBudget from '../Assets/target budget.png'
import TExpense from '../Assets/target expenses.png'
import GlobalStyle from '../components/PopupGlobalStyles/GlobalStyles';


function Dashboard() {

  const [showExpense, setShowExpense] = useState(false)
  const [addExpense, setaddExpense] = useState(false)
  const [addBudget, setaddBudget] = useState(false)

  const openExpense = () => {
    setShowExpense(prev => !prev)
  } 

  const openIncome = () => {
    setaddExpense(prev => !prev)
  } 

  const openBudget = () => {
    setaddBudget(prev => !prev)
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

  return (
    <div className='main_container'>

      <div className="row-1">
        <div className="page-title">
          Welcome, Demo
          </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item>
                <div className="row-1-items">

              <div className="add-expense">
                  <IconButton onClick={openIncome} aria-label="fingerprint" color="secondary" className='br-1'>
                    <img id="log-id" src={ExpenseIcon} alt="" />
                  </IconButton>
                  <GlobalStyle/>
                  <AddIncome showExpense = {showExpense} setaddExpense={setShowExpense}/> 
                <div className="text">
                Add expense
                </div>
                </div>


              <div className="add-income">
              <IconButton onClick={openExpense} aria-label="fingerprint" color="secondary" className='br-1'>
                    <img id="log-id" src={IncomeIcon} alt="" />
                  </IconButton>
                  <GlobalStyle/>
                  <AddExpense showExpense = {addExpense} setShowExpense={setaddExpense}/> 
                <div className="text">
                Add income
                </div>
                </div>


              <div className="create-budget">
              <IconButton onClick={openBudget} aria-label="fingerprint" color="secondary" className='br-1'>
                    <img id="log-id" src={BudgetIcon} alt="" />
                  </IconButton>
                  <GlobalStyle/>
                  <CreateBudget showExpense={addBudget} setaddBudget={setaddBudget}/> 
                <div className="text">
                Create budget
                </div>
                </div>


                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      
      <div className="row-2">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Item>
                <div className="row-2-tittle">Total Balance</div>
                  <div className="info">
                    <div className="icon">
                    <img id="log-id" src={TBalance} alt="" />
                  </div>

                <div className="amount">₦</div>
               </div>
              </Item>
            </Grid>

        <Grid item xs>
          <Item>
          <div className="row-2-tittle">Budget</div>
                  <div className="info">
                    <div className="icon">
                    <img id="log-id" src={TBudget} alt="" />
                  </div>

                <div className="amount">₦</div>
               </div>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
          <div className="row-2-tittle">Income</div>
                  <div className="info">
                    <div className="icon">
                    <img id="log-id" src={TIncome} alt="" />
                  </div>

                <div className="amount">₦</div>
               </div>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
          <div className="row-2-tittle">Expense</div>
                  <div className="info">
                    <div className="icon">
                    <img id="log-id" src={TExpense} alt="" />
                  </div>

                <div className="amount">₦</div>
               </div>
          </Item>
        </Grid>
          </Grid>
        </Box>
      </div>
      


      <div className="row-3">
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item sx={{
                  height: 500,       
                }}>
            <div className="content">
                <div className="title">
                  Transaction history
                  </div>
                <div className="content">
                  <div className="date">
                    Today
                    </div>
                  <DBhistory/>
                  </div>
              </div>
          </Item>
        </Grid>
        
        <Grid item xs={6}>
          <Item sx={{
                  height: 500,    
                }}>
            <div className="content">
                <div className="title">
                  Data Overview
                  </div>
                <div className="content chart-dig">
                   <LineChart/>
                  </div>
              </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
      </div>

    </div>
  )
}

export default Dashboard