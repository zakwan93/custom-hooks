import React, { useEffect, useState } from "react";
import Card from "../card/card";

const User = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetctUser = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?id=${userId}`
      );
      const users = await res.json();
      setUser(users[0]);
    };
    fetctUser();
  });

  return (
    <Card>
      {user ? (
        <div>
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
      ) : (
        <p>User Not found</p>
      )}
    </Card>
  );
};

export default User;
