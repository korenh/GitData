import React, { useEffect , useState } from 'react';

export default function Repo(props) {

  const [data , setData] = useState([])

  useEffect(() => {
    fetch(props.data.repos_url)
    .then(response => response.json())
    .then(data => setData(data));
  },[props.data]);

  return (
    <div className='repo-main'>
        {data.map(v=>(
            <div className="card-main" key={v.id} onClick={()=>window.location.href=v.html_url}>
                <h3>{v.name}</h3>
                <p>{v.owner.login}</p>
                <p>{v.size/100} mb</p>
                <p>{v.language}</p>
                <p>{v.updated_at.split('T')[0]}</p>
            </div>
        ))}
    </div>
  );
}
