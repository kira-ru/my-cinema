import { ChangeEvent, FC } from 'react'

import { Top } from '@components/AdminTable/Top'

import { SearchField } from '@ui/SearchField/SearchField'

interface AdminHeaderProps {
    searchTerm: string;
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    headerFields: string[];
}

export const AdminHeader: FC<AdminHeaderProps> = ({
    handleSearch,
    searchTerm,
    headerFields,
}) => {
    return (
        <div>
            <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
            <Top headerFields={headerFields} />
            {/*<AdminCreateButton onClick={onClick} className='ml-10'/>*/}
        </div>
    )
}
