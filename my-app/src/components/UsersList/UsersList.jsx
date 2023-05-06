import { UserCard } from "../UserCard/UserCard";
import { List } from "./UsersList.style";

export const UsersList = ({ users }) => {
    return (
        <List>
            {users.map((user) => (
                <li key={user.id}>
                    <UserCard userProp={user} />
                </li>
            ))}
        </List>
    );
};
