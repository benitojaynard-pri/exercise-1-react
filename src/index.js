// Call all functions inside services and log updated value/s
import {
    updateUser,
    getAllUsers,
    getUserById,
    addUser,
} from "./services/users";

updateUser(2, { email: "jaynard@soft.en" });

console.log(addUser());
console.log(getUserById(2));
console.log(getAllUsers());
