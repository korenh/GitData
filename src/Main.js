import React, { useEffect , useState } from 'react';
import Nav from './components/Nav';
import Bio from './components/Bio';
import Repo from './components/Repo';
import Gist from './components/Gist';
import Followers from './components/Followers';
import Following from './components/Following';
import { BrowserRouter as Router, Route , Redirect } from "react-router-dom";

export default function Main() {

  const [data , setData] = useState({})
  const [user , setuser ] = useState('korenh')
  
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`).then(res=>res.json()).then(data => setData(data));
  },[user]);

  return (
      <div className='main'>
        <Router>
          <Nav/>
          <div className='data-main'>
            <input className="inp-usr" type="text" placeholder="UserName" onChange={e => setuser(e.target.value)} />
              <Route path="/" exact component={()=><Bio data={data}/>} />
              <Route path="/repos" component={()=><Repo data={data}/>} />
              <Route path="/gists" component={()=><Gist data={data}/>} />
              <Route path="/followers" component={()=><Followers data={data}/>} />
              <Route path="/following" component={()=><Following data={data}/>} />
              <Redirect to='/'/>
            </div>
        </Router>
      </div>   
  );
}
