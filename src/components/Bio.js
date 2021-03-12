export default function Bio(props) {

    return (
        <div className='bio-main'>
            <img className='bio-image' src={props.data.avatar_url} alt='img'/>
            <p>{props.data.name}</p>
            <p>{props.data.location}</p>
            <p>{props.data.bio}</p>
            <p>{props.data.followers} Followers | {props.data.following} Following</p>
            <p></p>
        </div>
    )
}
