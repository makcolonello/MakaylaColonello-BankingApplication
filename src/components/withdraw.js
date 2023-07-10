

import React  from 'react';
import Card from './card';
import { UserContext } from './context';

export function Withdraw(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [balance, setBalance] = React.useState(25);
    const [withdraw, setWithdraw] = React.useState(0);
    const [emptyFields, setEmptyFields] = React.useState(true);
    

    const ctx = React.useContext(UserContext);

    React.useEffect(() => {
        if (withdraw) {
            setEmptyFields(false);
        } else {
            setEmptyFields(true);
        }
    }, [withdraw]);
    

    function validate(field, label) {
        let isValid = true
        if (!field) {
            setStatus(`Error: Please enter an amount to ${label}! `);
            setTimeout(() => setStatus(''), 3000)
            return false;
        }
        if (Math.sign(field) <= -1) {
            setStatus(`Error: Cannot enter a negative number!`);
            setTimeout(() => setStatus(''), 3000);
            return false 
        }

        if (Math.sign(field) <= 0) {
            setStatus(`Error: Cannot withdraw $0!`);
            setTimeout(() => setStatus(''), 3000);
            return false
        }

        if (withdraw > balance) {
            setStatus(`Error: Insufficient Funds!`);
            setTimeout(() => setStatus(''), 3000);
            return false
        }
        return isValid
    
    }

        function newWithdraw() {
    if (!validate(withdraw, "withdraw")) return;
   
            if (!validate(withdraw))
    return;
    let newAmount = balance - parseInt(withdraw);
    let newWithdraw = `${ctx.users} withdrew: ${withdraw}`;
    setShow(false);

    setBalance(newAmount);
    alert(`Withdraw Successful! New balance: $${newAmount}`);
    // Initialize submissions as an empty array if it is undefined or null
ctx.submissions ??=[];

// Push newDeposit to the submissions array
ctx.submissions.push(newWithdraw);

// Update the balance in the users array
ctx.users = newAmount;
        }
        function clearForm() {
            setWithdraw(0);
            setBalance(ctx.users);
            setShow(true);
        }

    

return (
    <Card
    header="Withdraw"
    bgcolor="secondary"
    status={status}
    body={show ? (
        <>
         Withdraw<br/>
        <input type="number" className="form-control" id="withdraw"
        placeholder="Enter Amount" value={withdraw} onChange={(e) => setWithdraw(e.currentTarget.value)} /> <br/>
        Balance<br/>
        <input type="number" className="form-control" id="balance"
        placeholder="Account Balance" value={balance} onChange={(e) => setWithdraw(e.currentTarget.value)} /> <br/>
        <button type="submit" className="btn btn-dark" onClick={newWithdraw} disabled={emptyFields}>Withdrawal Amount</button> <br/>
        </>
    ):(
        <>
        <h5>Withdrawal Successful!</h5>
        <button type="submit" className="btn btn-dark" onClick={clearForm}>Withdraw More</button> 
        <br/>
         </>
            )}
        />
    )}


export default Withdraw;