import {FC} from "react";
import {MaterialIcon} from "@ui/MaterialIcon/MaterialIcon";
import {useActions} from "@hooks/useActions";
import Link from "next/link";

export const LogOutButton: FC = () => {
    const {logout} = useActions()

    return (
        <button type="button" className='flex items-center' onClick={logout}>
            <Link href='/auth'>
                <MaterialIcon name='MdLogout'/>
                <span className='ml-2'>Log out</span>
            </Link>
        </button>
    );
};