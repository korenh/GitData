import {useState,useEffect} from 'react'

export default function Followers(props) {

    const [data , setData] = useState([])

    useEffect(() => {
      fetch(props.data.followers_url)
      .then(response => response.json())
      .then(data => setData(data));
    },[props.data]);

    return (
        <div className='follow-main'>
            {data.map(v=>(
                <div key={v.id}>
                    <img src={v.avatar_url} alt='img'/>
                    <p >{v.login}</p>
                </div>
            ))}
        </div>
    )
}
