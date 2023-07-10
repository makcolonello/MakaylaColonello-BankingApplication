
import React from "react";
import Card  from "./card";
import { UserContext } from "./context";




export function CreateAccount() {
    // create state variables 
const [show, setShow] = React.useState(true);
const [status, setStatus] = React.useState("");
const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const [emptyFields, setEmptyFields] = React.useState(true);
const [newUser, setNewUser] = React.useState([]);

const ctx = React.useContext(UserContext);

function account() {
    return Math.floor(Math.random() * 1000000) + 1;
}


// handle Event handling functions: handleNewAccountCreation, validate, clearForm
function validate(field, label) {
    let isValid = true;
    if(!field) {
        setStatus(`Error: Please examine the ${label} field`);
        setTimeout(() => setStatus(''), 3000)
        return false;
    }
    if (label === "email") {
        isValid = String(field).toLowerCase().match(/\S+@\S+\.\S+/);
            setStatus(isValid ? "" : "Email is invalid, please use a valid email format.");
    }
    if (label === "password") {
        isValid = field.length >= 6;
        setStatus(isValid ? "" : "Password is too short, please choose a longer one.");

    }
    return isValid;
    }


function handleNewAccountCreation() {
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;

    setShow(false);
    const accountId = account();
    const newUserObj = {accountId, name, email, password, balance: 25};
    ctx.users.push(newUserObj);
    setNewUser(newUserObj);
}

React.useEffect(() => {
    if (name || email || password) {
        setEmptyFields(false);
    } else {
        setEmptyFields(true);
    }

    }, [name, email, password]);


function clearForm () {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
}

return (
    // create 2 forms depending on the value of the variable show
    // show if-- Fields: styling, value, onChange event
    //           Button: handle event
    // show else-- Fields: styling, value, onChange event
    //             Button: handle event 
    <Card
    bgcolor="dark"
    header="Create Account"
    status={status}
    body={show ? (
        <>
        Name<br/>
        <input type="input" className="form-control" id="name"
        placeholder="Enter Name" value={name} onChange={(e) => setName(e.currentTarget.value)} /><br/>
        Email Address<br/>
        <input type="input" className="form-control" id="email"
        placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} /><br/>
        Password<br/>
        <input type="input" className="form-control" id="password"
        placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} /><br/>
        <button type="submit" className="btn btn-light" onClick={handleNewAccountCreation} disabled={emptyFields}>Create Account</button>
        </>
    ):(
        <>
        <h5>Success, your account was created!</h5><br/>
        <p> Your account ID is: {newUser.accountId}</p><br/>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                 </>
            )}
        />
    );
}

export default CreateAccount;

