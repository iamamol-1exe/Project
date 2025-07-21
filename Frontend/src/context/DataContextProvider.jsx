import axios from "axios";
import React, { createContext, useState,useEffect } from "react";

export const DataContext = createContext();

const DataContextProvider =  ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user,setUser] = useState({
    email : "",
    name : "",
    token : "",
  }) ;
   const token = localStorage.getItem('token');
useEffect(() => {
    // Define an async function to handle the token verification
    const verifyUser = async () => {
     
      if (token) {
        try {
          // Await the API call to get the actual response
          const response = await axios.get("http://localhost:4000/user/profile", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          // Check for a successful response and update state
          if (response.status === 200) {
            setIsLoggedIn(true);
            setUser({
              email: response.data.user.email, 
              name: response.data.user.name,   
            });
           
            console.log("User verified:", response.data);
          }
        } catch (error) {
          // If token is invalid or API fails, log out the user
          console.error("Token verification failed:", error);
          setIsLoggedIn(false);
          setUser({ email: "", name: "" });
          // Optional: Remove invalid token from storage
          
        }
      }
    };

    verifyUser();
  },[token])


  return (
    <div>
      <DataContext.Provider value={{isLoggedIn, setIsLoggedIn,user}}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default DataContextProvider;
