import { NextPageAuth } from '@providers/AuthProvider/types'
import {GenreList} from "@screens/Admin/genres/GenreList";

const GenresListPage: NextPageAuth = () => {
    return <GenreList />
}

GenresListPage.isOnlyAdmin = true
export default GenresListPage
