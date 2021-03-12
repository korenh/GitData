export default function Bio(props) {

    return (
        props.data.login?
        <div className='bio-main'>
            <img src={props.data.avatar_url} alt='img'/>
            <p>{props.data.name}</p>
            <p>Created | {props.data.created_at.split('T')[0]}</p>
            <p>{props.data.location}</p>
            <p>{props.data.bio}</p>
            <p>{props.data.followers} Followers | {props.data.following} Following</p>
            <p>{props.data.public_repos} Repositories</p>
            <p>{props.data.public_gists} Gists</p>
            <p>Twitter | {props.data.twitter_username}</p>
        </div>
        :''
    )
}
