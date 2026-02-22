export const NETFLIX_LOGO = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

export const NETFLIX_BACKGROUND = "https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-1200-80.jpg.webp";

export const API_OPTIONS =
{
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

// GPT Search background (you can replace with any image URL you like)
export const GPT_SEARCH_LOGO = NETFLIX_BACKGROUND;

// Bonus: Language dropdown
export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hi", name: "Hindi" },
    { identifier: "es", name: "Spanish" },
];