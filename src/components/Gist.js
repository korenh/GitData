import React, { useEffect , useState } from 'react';
import File from '@material-ui/icons/InsertDriveFile';

export default function Gist(props) {

  const [data , setData] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.data.login}/gists`).then(res=>res.json()).then(data => setData(data));
  },[props.data]);

  return (
    <div className='repo-main'>
        {data.map(v=>(
            <div className="card-main" key={v.id} onClick={()=>window.location.href=v.html_url}>
                {Object.entries(v.files).map(([key, value])=>(
                  <section className='gist-file' key={key}><File/><p>{key}</p></section>
                ))}
                <p>{v.description}</p>
                <p>{v.created_at.split('T')[0]}</p>
            </div>
        ))}
    </div>
  );
}
