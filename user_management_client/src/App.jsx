import "./App.css";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {
      name,
      email,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Users Added Successfully");
          form.reset();
        }
      });
  };
  return (
    <>
      <h1>Simple Crud</h1>
      {/* form */}
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
