import {ChangeEvent, FC} from "react";
import {SearchField} from "@ui/SearchField/SearchField";
import {AdminCreateButton} from "@ui/admin/AdminCreateButton/AdminCreateButton";
import {useUsers} from "@screens/Admin/users/useUsers";

interface AdminHeaderProps {
    searchTerm: string
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export const AdminHeader: FC<AdminHeaderProps> = ({handleSearch, searchTerm}) => {

    return (
        <div>
            <SearchField searchTerm={searchTerm} handleSearch={handleSearch}/>
            {/*<AdminCreateButton onClick={onClick} className='ml-10'/>*/}
        </div>
    );
};