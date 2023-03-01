import {NextPageAuth} from "@providers/AuthProvider/types";
import {UserList} from "@screens/Admin/users/UserList";

const UsersPage: NextPageAuth = () => {
    return <UserList/>
};
export default UsersPage
UsersPage.isOnlyAdmin = true