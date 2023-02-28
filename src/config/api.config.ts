export const API_URL = `http://localhost:3000/api`

export const getAuthUrl = (slug: string) => '/auth' + slug
export const getUsersUrl = (slug: string) => '/users' + slug
export const getMoviesUrl = (slug: string) => '/movies' + slug
export const getActorsUrl = (slug: string) => '/actors' + slug
export const getGenresUrl = (slug: string) => '/Genres' + slug
export const getRatingsUrl = (slug: string) => '/ratings' + slug


export const getPopularMovies = () => '/movies/most-popular'
