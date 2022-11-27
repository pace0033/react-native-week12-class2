import React from 'react';

const UserContext = React.createContext();

function UserProvider(props) {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const data = await import('../data/users.js');
      console.log(data);
      setUsers(data.users);
    }

    fetchData();
  }, []);

  return <UserContext.Provider value={[users]} {...props} />;
}

function useUser() {
  const context = React.useContext(UserContext);
  if (!context) throw new Error('Can not find a context');
  return context;
}

export { UserProvider, useUser };
