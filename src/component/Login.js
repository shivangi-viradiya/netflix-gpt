import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {NETFLIX_BACKGROUND} from "../utils/constant";


const Login = () => {

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        //validate the form data

        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {
            //sign-up - sign-in logic

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://i.pravatar.cc/150?img=12"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                        }));


                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });



                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage);
                });
        } else {
            //sign in

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const { uid, email, displayName, photoURL } = userCredential.user;
                    dispatch(addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    }));
                })
                .catch((error) => {
                    setErrorMessage(error.code + " " + error.message);
                });
        }
    }

    return (
        <div className="relative w-screen h-screen">
            <Header />

            {/* Background Image */}
            <img
                className="absolute w-full h-full object-cover"
                alt="netflix-background"
                src={NETFLIX_BACKGROUND}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Login Form */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <form className="bg-black bg-opacity-75 p-10 rounded-lg w-96 text-white flex flex-col"
                    onSubmit={(e) => { e.preventDefault() }}>
                    <h1 className="text-3xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                    {!isSignInForm &&
                        <input
                            ref={name}
                            type="text"
                            placeholder="Full Name"
                            className="p-3 mb-4 rounded bg-gray-800"
                        />}

                    <input
                        ref={email}
                        type="text"
                        placeholder="Email Address"
                        className="p-3 mb-4 rounded bg-gray-800"
                    />

                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="p-3 mb-6 rounded bg-gray-800"
                    />
                    <p className="text-red-500 text-sm mt-2 font-semibold">{errorMessage}</p>

                    <button
                        type="button"
                        className="p-3 my-6 bg-red-600 hover:bg-red-700  w-full rounded-md font-semibold transition duration-200"
                        onClick={handleButtonClick}
                    >
                        {isSignInForm ? "Sign In" : "Sign Up"}

                    </button>

                    <p className="text-gray-400 text-sm mt-4">
                        {isSignInForm ? "New to Netflix? " : "Already registered? "}
                        <span
                            onClick={toggleSignInForm}
                            className="text-white font-medium hover:underline cursor-pointer"
                        >
                            {isSignInForm ? "Sign up now." : "Sign in now."}
                        </span>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default Login;
