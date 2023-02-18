import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const { id } = useParams();
  const [userr, setUser] = useState({});

  async function fetchUser() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log(data);
    setUser(data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Link to="/">Go Back</Link>
      <h1>{userr.id}</h1>;<h1>{userr.name}</h1>;<h1>{userr.email}</h1>;
      <h1>{userr.username}</h1>;
    </div>
  );
}

export default Users;
