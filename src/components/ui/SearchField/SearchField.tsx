import {ChangeEvent, FC} from "react";
import {MaterialIcon} from "@ui/MaterialIcon/MaterialIcon";
import styles from './searchField.module.scss'
interface SearchFieldProps {
    searchTerm: string
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchField: FC<SearchFieldProps> = ({searchTerm, handleSearch}) => {

    return (
        <div className={styles.wrapper}>
            <MaterialIcon name='MdSearch' />
            <input className='text-black' placeholder='Search...' onChange={handleSearch} value={searchTerm} />
        </div>
    );
};