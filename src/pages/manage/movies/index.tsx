import {NextPageAuth} from "@providers/AuthProvider/types";
import {MovieList} from "@screens/Admin/movies/MovieList";

const MoviesListPage: NextPageAuth = () => {
    
    return <MovieList/>
};

MoviesListPage.isOnlyAdmin = true
export default MoviesListPage