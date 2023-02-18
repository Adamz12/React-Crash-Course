import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "../components/User.jsx";
import { Link } from "react-router-dom";


function Home() {
  const [users, setUsers] = useState([]);
  async function main() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data)
    setUsers(data);
  }
  useEffect(() => {
    setTimeout(() => {
      main();
    }, 2000);
  }, []);

  const pixels = "3px";

  return (
    <div>
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <Users
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
          />
        </Link>
      ))}
    </div>
  );
}

export default Home;
