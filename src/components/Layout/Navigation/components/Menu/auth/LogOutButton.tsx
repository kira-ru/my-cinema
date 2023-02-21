import {FC} from "react";
import {MaterialIcon} from "@ui/MaterialIcon/MaterialIcon";

export const LogOutButton: FC = () => {

    return (
        <button type="button" className='flex items-center'>
            <MaterialIcon name='MdLogout'/>
            <span className='ml-2'>Log out</span>
        </button>
    );
};