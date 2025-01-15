function TextInput({id,text}) {
    const user = {
        username: "test",
        password : "1234",
        name : "박소율",
    };

    const {username, name} = user;
    console.log(username);


    return <div>
        <label htmlFor={id}>{text}</label>
        <input type="text" id={id}/>
    </div>
}

export default TextInput;