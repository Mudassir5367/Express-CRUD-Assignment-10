// const jwt = require("jsonwebtoken");

let data = [
  { id: 1, name: "Mudassir", age: "24", email: "mudassir@gmail.com" },
  { id: 2, name: "Hussain", age: "25", email: "hussain@gmail.com" },
  { id: 3, name: "Afaq", age: "29", email: "afaq@gmail.com" },
];

const create = (req, res) => {
    const { id } = req.body;
    const existingUser = data.find((user) => user.id === id);

    if (existingUser) {
      console.log("User Already Exists");
      return res.json({ error: "User already exists" });
    } else {
      data.push(req.body);
      return res.send(data);
    }
  } 

const getAlldata = (req, res) => {
  return res.send(data);
};

const getOneUser = (req, res) => {
  const foundUser = data.find((user) => user.id === parseInt(req.params.id));
  return res.send(foundUser);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = data.findIndex(user => user.id === parseInt(id));

  if (index !== -1) {
    data.splice(index, 1); 
    return res.send(data);
  } else {
    return res.send("User not found");
  }
};

const update = (req, res) => {
  const { id, name, age, email } = req.body;
  const foundUser = data.find((user) => user.id === parseInt(req.params.id));

  if (foundUser) {
    if (id) foundUser.id = id;
    if (name) foundUser.name = name;
    if (age) foundUser.age = age;
    if (email) foundUser.email = email;
  }

  res.send(data);
};

module.exports = {
  create,
  getAlldata,
  getOneUser,
  deleteUser,
  update,
};
