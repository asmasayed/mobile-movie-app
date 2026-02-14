import { Header } from "@react-navigation/elements";

//configuration object
export const OMDB_CONFIG={
    BASE_URL:'https://www.omdbapi.com/',
    API_KEY:process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    header:{
        //what kind of data this request can accept
        accept:'application/json',
        //Omdb does not use authorization
        // Authorization:`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
} 
export const fetchMovies=async (query:string)=>{
    const response=await fetch(`
        ${OMDB_CONFIG.BASE_URL}?s=${query}&apikey=${OMDB_CONFIG.API_KEY}
        `,
        {
            method:"GET",
            headers:OMDB_CONFIG.header
        }
    );
    if(!response.ok){
        //@ts-ignore
        throw new Error("Failed to load movies list",response.statusText)
    }
    const data=await response.json();
    return data.Search;
}
export const getMovieDetail=async (id:string)=>{
    const response=await fetch(`
        ${OMDB_CONFIG.BASE_URL}?i=${id}&apikey=${OMDB_CONFIG.API_KEY}
        `,
        {
            method:"GET",
            headers:OMDB_CONFIG.header
        }
    )
    if(!response.ok){
        //@ts-ignore
        throw new Error("Failed to fetch movie details",response.statusText)
    }
        const data=await response.json();
        return data;
}