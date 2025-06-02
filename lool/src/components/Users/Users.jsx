import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [jedan, setJedan] = useState("neki");
  const [potreban, setPotreban] = useState(null);
  const [firstUser, setFirstUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?userId=1"
        );
        setFirstUser(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
    getUsers();
  }, []);

  function getOneUser(event) {
    setJedan(event.target.value);
  }

  function findUser(korisnik) {
    const foundUser = users.find((user) => user.username === korisnik);
    console.log(foundUser);
    setPotreban(foundUser || null);
  }

  return (
    <div>
      <input type="text" onChange={getOneUser} value={jedan} />
      <p>{jedan}</p>

      <button onClick={() => findUser(jedan)}>find</button>

      {potreban && potreban.name ? (
        <p>
          {potreban.name}, {potreban.email}
        </p>
      ) : (
        <p>nema</p>
      )}

      <h3>First user's posts:</h3>
      {firstUser && firstUser.length > 0 ? (
        <ul>
          {firstUser.map((post) => (
            <li key={post.id}>{post.body}</li>
          ))}
        </ul>
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}

export default Users;
