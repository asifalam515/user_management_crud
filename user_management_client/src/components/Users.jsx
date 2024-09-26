import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);
  console.log(users);
  const handleDelete = (_id) => {
    // step 1 load specific data that we want to delete
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = users.filter((user) => user._id !== _id);

          alert("Deleted Successfully!!");
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <h1>Data Loaded= {loadedUser.length} </h1>
      <div>
        {loadedUser.map((user) => {
          return (
            <p key={user._id}>
              {user._id}:: {user.name}:: {user.email}
              <Link to={`/update/${user._id}`}>
                <button>Update</button>
              </Link>
              <button onClick={() => handleDelete(user._id)}>X</button>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
