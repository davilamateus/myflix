const API_KEY = '?api_key=fc38b829824811adfd0f77be846c5495';
 const Categories = [
    {title:'On Movies', slug:'onMovies', path:`movie/now_playing${API_KEY}`},
    {title:'Top 20  Week', slug:'topRated', path:`trending/all/week${API_KEY}`},
    {type:'movies', title:'Action', slug:'action', path:`discover/movie${API_KEY}&with_genres=28`},
    {type:'movies', title:'Adventure', slug:'aventure', path:`discover/movie${API_KEY}&with_genres=12`},
    {type:'movies', title:'Romance', slug:'romance', path:`discover/movie${API_KEY}&with_genres=10749`},
    {type:'movies', title:'Comedy', slug:'comedy', path:`discover/movie${API_KEY}&with_genres=35`},
    {type:'movies', title:'Animation', slug:'animation', path:`discover/movie${API_KEY}&with_genres=16`},
    {type:'movies', title:'Documentary', slug:'documentary', path:`discover/movie${API_KEY}&with_genres=99`},
    {type:'tv', title:'Action', slug:'action', path:`discover/tv${API_KEY}&with_genres=80   `},
    {type:'tv', title:'Animation', slug:'animation', path:`discover/tv${API_KEY}&with_genres=16`},
    {type:'tv', title:'Drama', slug:'drama', path:`discover/tv${API_KEY}&with_genres=18`},
    {type:'tv', title:'Comedy', slug:'comedy', path:`discover/tv${API_KEY}&with_genres=35`},
    {type:'tv', title:'Documentary', slug:'documentary', path:`discover/tv${API_KEY}&with_genres=99`},
    {type:'top', title:'All Today', slug:'allToday', path:`trending/all/day${API_KEY}`},
    {type:'top', title:'All This Week', slug:'allThisWeek', path:`trending/all/week${API_KEY}`},
    {type:'top', title:'Movies Today', slug:'moviesToday', path:`trending/movie/day${API_KEY}`},
    {type:'top', title:'Movies This Week', slug:'movieWeek', path:`trending/movie/week${API_KEY}`},
    {type:'top', title:'Tv Today', slug:'tvToday', path:`trending/tv/day${API_KEY}`},
    {type:'top', title:'Tv This Week', slug:'tvWeek', path:`trending/tv/week${API_KEY}`},




    /*
    https://api.themoviedb.org/3/genre/tv/list?api_key=[MY_KEY]&language=en-US
    */
]

export default Categories

