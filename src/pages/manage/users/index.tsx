import {NextPageAuth} from "@providers/AuthProvider/types";
import {Users} from "@screens/Admin/users/Users";

const UsersPage: NextPageAuth = () => {
    return <Users/>
};
export default UsersPage
UsersPage.isOnlyAdmin = true