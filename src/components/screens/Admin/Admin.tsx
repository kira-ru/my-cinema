import {FC} from "react";
import {Meta} from "@utils/meta/Meta";
import {Heading} from "@ui/Heading/Heading";
import {Statistic} from "@screens/Admin/home/statistic/Statistic";
import {AdminNavigation} from "@ui/admin/AdminNavigation/AdminNavigation";

export const Admin: FC = () => {

    return (
        <Meta title={'Admin panel'}>
            <AdminNavigation/>
            <Heading title='Some statistic'/>
            <Statistic/>
        </Meta>
    );
};