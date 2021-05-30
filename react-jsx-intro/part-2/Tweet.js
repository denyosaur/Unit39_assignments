const Tweet = (props) => {
    return (
        <ul>
            <li>{props.name} - {props.username}- {props.date}</li>
            <li>{props.message}</li>
        </ul>
    )
}