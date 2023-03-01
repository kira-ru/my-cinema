import {NextPageAuth} from "@providers/AuthProvider/types";
import {ActorList} from "@screens/Admin/actors/ActorList";

const ActorListPage: NextPageAuth = () => {
    return <ActorList/>
};

ActorListPage.isOnlyAdmin = true;
export default ActorListPage