import { UserCard } from "../UserCard/UserCard";
import { List } from "./UsersList.style";
import PropTypes from "prop-types";

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

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
};
