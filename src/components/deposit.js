import React from 'react';
import { UserContext } from './context';
import Card from './card';


export function Deposit(){

    const [show, setShow] = React.useState(true);
    const [deposit, setDeposit] = React.useState(0);
    const [balance, setBalance] = React.useState(25);
    const [status, setStatus] = React.useState('');
    const [emptyFields, setEmptyFields] = React.useState(true);
    const ctx = React.useContext(UserContext);
    
    React.useEffect(() => {
        if (deposit) {
            setEmptyFields(false);
        } else {
            setEmptyFields(true);
        }
    }, [deposit]);

function validate(field, label) {
    let isValid = true
    if(!field) {
        setStatus(`Error: Please enter an amount in the ${label} field`);
        setTimeout(() => setStatus(''), 3000)
        return false;
    }

    if (Math.sign(field) <= -1) {
        setStatus(`Error: Cannot enter a negative number!`);
        setTimeout(() => setStatus(''), 3000);
        return false 
    }

    return isValid

}

function newDeposit () {
    if (!validate(deposit, "deposit")) return;
  

    
    if (!validate(deposit))
    return;
    let newAmount = balance + parseInt(deposit);
    let newDeposit = `${ctx.users} deposited: ${deposit}`;
    setShow(false);

    setBalance(newAmount);
    alert(`Deposit Successful! New balance: $${newAmount}`);

   

    // Initialize submissions as an empty array if it is undefined or null
    ctx.submissions ??=[];

    // Push newDeposit to the submissions array
    ctx.submissions.push(newDeposit);

    // Update the balance in the users array
    ctx.users = newAmount;
}

function clearForm() {
    setDeposit(0);
    setBalance(ctx.users);
    setShow(true);
}
return (
    <Card 
    bgcolor="success"
    header="Deposit"
    status={status}
    body={show ? (
        <>
         Deposit<br/>
        <input type="number" className="form-control" id="deposit"
        placeholder="Enter Amount" value={deposit} onChange={(e) => setDeposit(e.currentTarget.value)} /> <br/>
        Balance<br/>
        <input type="number" className="form-control" id="balance"
        placeholder="Account Balance" value={balance} onChange={(e) => setDeposit(e.currentTarget.value)} /> <br/>
        <button type="submit" className="btn btn-dark" onClick={newDeposit} disabled={emptyFields}>Deposit Amount</button> <br/>
        </>
    ):(
        <>
        <h5>Deposit Successful! <br/>Your current balance is ${balance}</h5>
        <button type="submit" className="btn btn-dark" onClick={clearForm}>Deposit More</button> 
        <br/>
         </>
            )}
        />
    )
}

export default Deposit;
