import React,{useEffect, useState} from 'react'
import axios from 'axios';

import './logout.css'


function Logout() {

/*     useEffect(() => {
        fetch ('http://chimaobi.herokuapp.com/expense')
        .then(res => {
            return res.json();
        }).then(data => {
            console.log(data)
        })
    }, []) */

    //  useEffect(() => {
    //   axios.get ('http://chimaobi.herokuapp.com/auth/signin')
    //     .then(res => {
    //       console.log(res)
    //     })
    // }, [])

/*   const [val, setVal] = useState();

  useEffect(() => {
    setVal(val);
  }, [val]);
  
  const getUsersData=()=>{
    axios
      .get(`/users`, {})
      .then(res => {
        const data = res.data
        console.log(data)
        const users = data.map(u =>
            <div>
            <p>{u.id}</p>
            <p>{u.created_at}</p>
            <p>{u.updated_at}</p>
            <p>{u.amount}</p>
            <p>{u.date}</p>
            </div>
            )

            this.setVal({
                users
            })
      })
      .catch((error) => {
          console.log(error)
      })

  }

  const componentDidMount=()=>{
      this.getUsersData()
  } */

  const [val, setVal] = useState([])

  useEffect(()=> {
    axios.get('http://chimaobi.herokuapp.com/users')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  })

 return (
    <div>
      Logout Page
        <ul>
          {
            val.map(val => <li key={val.id}>
              {val.created_at}
            </li>)
          }
        </ul>
    </div>
  )
}

export default Logout