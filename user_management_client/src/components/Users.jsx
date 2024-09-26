import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(id);
  };

  return (
    <div>
      <h1>Data Loaded= {users.length} </h1>
      <div>
        {users.map((user) => {
          return (
            <p key={user._id}>
              {user._id}:: {user.name}:: {user.email}
              <button onClick={() => handleDelete(user._id)}>X</button>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
