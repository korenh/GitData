import React, { useEffect , useState } from 'react';
import Nav from './components/Nav';
import Bio from './components/Bio';
import Repo from './components/Repo';
import Users from './components/Users';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Main() {

  const [data , setData] = useState({})
  const [user , setuser ] = useState('korenh')
  
    useEffect(() => {
      fetch(`https://api.github.com/users/${user}`).then(response => response.json()).then(data => setData(data));
    },[user]);

  return (
    <div>
        <div className='main'>
        <Router>
          <Nav/>
          <div className='data-main'>
            <input className="inp-usr" type="text" placeholder="UserName" onChange={e => setuser(e.target.value)} />
            
              <Route path="/" exact component={()=><Bio data={data}/>} />
              <Route path="/repos" component={()=><Repo data={data}/>} />
              <Route path="/users" component={()=><Users data={data}/>} />
            </div>
        </Router>
      </div>   
    </div>
  );
}
