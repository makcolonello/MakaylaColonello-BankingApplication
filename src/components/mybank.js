import React, { useState, useRef, useEffect } from "react";
import Card from './card';



const LoginForm = () => {

  
  const userRef = useRef();
  const errRef = useRef();
  const [status, setStatus] = useState("");
  const [accountId, setAccountId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [emptyFields, setEmptyFields] = useState(true);
  


  useEffect(() => {
    setError('');
  }, [accountId, username, password])

  function validate(field, label) {
    let isValid = true;

    if(!field) {
      setStatus(`Error: Please examine the ${label} field`);
      return false;
  }
    if(label === "password") {
      isValid = field.length >= 6;
      setStatus(isValid ? "" : "Please input a valid password.");
    }
   
    
  if(isNaN(accountId)) {
    isValid = Number.isFinite(field);
  setStatus(isValid ? "" : "Please input a valid account ID.");
  }
  
    if(label === "username") {
      isValid = String(field).toLowerCase().match(/\S+@\S+\.\S+/);
      setStatus(isValid ? "" : "Please input a valid username.");
    }
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate(accountId, "accountId")) return;
    if (!validate(username, "username")) return;
    if (!validate(password, "password")) return;

  
      setAccountId('');
      setUsername('');
      setPassword('');
      setSuccess(true);
  }
    
    useEffect(() => {
      if (accountId || username || password) {
        setEmptyFields(false);
      } else {
        setEmptyFields(true);
      }
    }, [accountId, username, password]);
     


return (
  
  <Card
  bgcolor="danger"
  header="Login"
  status={status}
  body=
  {success ? (
    <>
    <section>
      <h1>Login Successful!</h1>
      <br />
    </section>
    </>
  ) : (
    <>
    <section>
      <p ref={errRef} className={error ? "error" : "offscreen"} aria-live="assertive">{error}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="accountId">Account ID:</label>
        <input
        type="text"
        id="accountId"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setAccountId(e.target.value)}
        value={accountId}
        required
        />
        <label htmlFor="username">Username:</label>
        <input
        type="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setUsername(e.target.value)}
        required
        />
        <label htmlFor="password">Password:</label>
        <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
        />
        <button type="submit" className="btn btn-dark" onClick={handleSubmit} disabled={emptyFields}>Login</button>
      </form>
    </section>
    </>
    
  )}
  />
)
  }
  
  
   
  
export default LoginForm;