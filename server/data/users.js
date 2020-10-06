import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@techshop.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "johndoe@techshop.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "janedoe@techshop.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
