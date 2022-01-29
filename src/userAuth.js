import {
  createContext,
  userContext,
  useEffect,
  useState,
  useContext,
} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState([]);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signOut() {
    return signOut(auth);
  }
  useEffect(() => {
    const ubsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      ubsubscribe();
    };
  });
  return (
    <userAuthContext.Provider
      value={{
        user,
        signUp,
        login,
        signOut,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}
export function useUserAuth() {
  return useContext(userAuthContext);
}
