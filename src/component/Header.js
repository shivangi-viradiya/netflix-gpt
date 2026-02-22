import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const selectedLang = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).catch(() => navigate("/error"));
  };

  const handleGptSearch = () => {
    dispatch(toggleSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unscbscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unscbscribe();
  }, [dispatch, navigate]);

  return (
    <div
      className="fixed top-0 left-0 w-full z-50
                 bg-gradient-to-b from-black via-black/80 to-transparent
                 px-10 py-4 flex items-center justify-between text-white"
    >
      <img className="w-32 cursor-pointer" alt="Netflix Logo" src={NETFLIX_LOGO} />

      {user && (
        <div className="flex items-center space-x-4">
          {showGptSearch &&
            <div className="relative">
              <select
                value={selectedLang}
                onChange={handleLanguageChange}
                className="appearance-none bg-black/70 text-white border border-white/30 pl-4 pr-10 py-2 rounded-md outline-none cursor-pointer hover:border-white focus:border-red-600 focus:ring-2 focus:ring-red-600 transition duration-200"
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option key={language.identifier} value={language.identifier} className="bg-zinc-900 text-white">
                    {language.name}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/80">
                ▼
              </span>
            </div>}

          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out shadow-md"
            onClick={handleGptSearch}
          >
            GPT Search
          </button>

          <img className="w-8 h-8 rounded cursor-pointer" alt="User Avatar" src={user?.photoURL} />

          <button className="text-sm font-medium hover:underline cursor-pointer" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;