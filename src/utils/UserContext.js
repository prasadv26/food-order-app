import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "User",
    email: "useremail@email.com",
  },
});

export default UserContext;
