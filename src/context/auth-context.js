import { createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState({
    userDetails: "",
    token: "",
  });
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const res = await axios.post("/api/auth/login", { email, password });

      if (res.status === 200) {
        const {
          data: { encodedToken, foundUser },
        } = res;
        setUserState({ userDetails: foundUser, token: encodedToken });
        localStorage.setItem(
          "AUTH",
          JSON.stringify({
            userDetails: foundUser,
            token: encodedToken,
          })
        );
        navigate("/explore");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signup = async (email, password) => {
    try {
      const res = await axios.post("/api/auth/signup", {
        email,
        password,
      });

      if (res.status === 201) {
        const {
          data: { encodedToken, createdUser },
        } = res;
        setUserState({ userDetails: createdUser, token: encodedToken });
        localStorage.setItem(
          "AUTH",
          JSON.stringify({
            userDetails: createdUser,
            token: encodedToken,
          })
        );
        navigate("/explore");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setUserState({
      userDetails: "",
      token: "",
    });
    localStorage.removeItem("AUTH");
    navigate("/explore");
  };

  const isLogedIn = () => (userState.userDetails ? true : false);

  useEffect(() => {
    const auth = localStorage.getItem("AUTH")
      ? JSON.parse(localStorage.getItem("AUTH"))
      : {};
    if (auth.userDetails) {
      setUserState({ ...auth });
    }
  }, []);

  const token = userState.token;

  return (
    <AuthContext.Provider value={{ token, login, signup, logout, isLogedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
