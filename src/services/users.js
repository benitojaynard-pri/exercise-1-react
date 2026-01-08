import { users as data } from "../data/users";
import { generateId } from "../utils";

//private
let users = [...data];

export function getAllUsers() {
    // get all users
    return [...users];
}

export function getUserById(id) {
    //get single user by id
    return users.find((user) => user.id === id);
}

export function updateUser(id, userInfo) {
    //update user (userInfo is an object which can optionally contain properties of a user)
    users = users.map((user) => {
        if (user.id === id) {
            return {
                ...user,
                ...userInfo,
            };
        }

        return user;
    });
}

export function addUser(userInfo) {
    // Create the new user object
    const newUser = {
        ...userInfo, // Copy optional properties (name, email, etc.)
        id: generateId(users), // Generate unique ID using your util function
    };

    // Add to the local array
    users.push(newUser);

    return newUser;
}

// Helper to see the current state
export const getUsers = () => users;
