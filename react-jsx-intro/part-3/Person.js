const Person = (props) => {

    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Age: {props.age} - {props.age < 18 ? "you must be 18" : "please go vote!"}</p>
            <p>Name: {props.name.length > 8 ? props.name.slice(0, 6) : props.name}</p>
            <ul>
                {props.hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    )
}