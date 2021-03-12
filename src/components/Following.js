import {useState,useEffect} from 'react'

export default function Following(props) {

    const [data , setData] = useState([])

    useEffect(() => {
       fetch(`https://api.github.com/users/${props.data.login}/following`)
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
