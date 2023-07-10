import React, { useEffect } from 'react';
import { UserContext } from './context'
import Card from './card';

function AllData() {
  const ctx = React.useContext(UserContext);
  const usersData = ctx.users;

  useEffect(() => {
    // Add a useEffect hook to update the component when usersData changes
    // This ensures that teh latest data is displayed after a deposit 
    console.log(usersData); // Verify if the usersdata is correctly updated
  }, [usersData]);


  function createCard(user) {
    const {name, email, password, accountId} = user;

    for (let id of Object.keys(user)) {
      var account = user[id];
      console.log(id, account);
    }
   

return (
      <Card
        key={email}
        header="All Data"
        bgcolor="danger"
        body={
          <>
            <p className="card-text">Name: {name}</p>
            <p className="card-text">Email: {email}</p>
            <p className="card-text">Password: {password}</p>
            <p className="card-text">Account ID: {accountId}</p>
          </>
        }
      />
    );
  }
  

  const cards = Object.values(usersData).map(createCard);

  return (
    <div>
      {cards}
    </div>
  );

}  
export default AllData;
