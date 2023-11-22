// const jwt = require("jsonwebtoken");

let users = [
  { id: 1, name: "Mudassir", age: "24", email: "mudassir@gmail.com" },
  { id: 2, name: "Hussain", age: "25", email: "hussain@gmail.com" },
  { id: 3, name: "Afaq", age: "29", email: "afaq@gmail.com" },
];

const create = (req, res) => {
  try {
    const { id } = req.body;
    const existingUser = users.find((user) => user.id === id);

    if (existingUser) {
      console.log("User Already Exists");
      return res.json({ error: "User already exists" });
    } else {
      users.push(req.body);
      return res.send(users);
    }
  } catch (error) {
    console.log("Server Error", error);
    return res.json({ error: "Internal server error" });
  }
};

const getAllUsers = (req, res) => {
  return res.send(users);
};

const getOneUser = (req, res) => {
  const foundUser = users.find((user) => user.id === parseInt(req.params.id));
  return res.send(foundUser);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== parseInt(id));
  return res.send(users);
};

const update = (req, res) => {
  const { id, name, age, email } = req.body;
  const foundUser = users.find((user) => user.id === parseInt(req.params.id));

  if (foundUser) {
    if (id) foundUser.id = id;
    if (name) foundUser.name = name;
    if (age) foundUser.age = age;
    if (email) foundUser.email = email;
  }

  res.send(users);
};

module.exports = {
  create,
  getAllUsers,
  getOneUser,
  deleteUser,
  update,
};
