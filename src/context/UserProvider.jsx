import React, { useMemo, useState, useEffect} from "react";

import socket, {sendLogin, sendRegister} from "../utilities/socker-methods";


import UserContext from "./UserContext";


const UserProvider=({children})=>{

    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');

    

    useEffect(()=>{
        console.log('a');
    },[user]);

    const login=(form)=>{
        sendLogin(socket, form);
    }

    const register=(form)=>{
        sendRegister(socket, form)
    }

    const setTokens = accessToken => {
        setToken(accessToken);
        localStorage.setItem('accessToken', accessToken);
      };

    const setIdUser= id=>{
        localStorage.setItem('idUser', id);
    }
    const deleteIdUser= ()=>{
        localStorage.removeItem('idUser');
    }
    
      const deleteToken = () => {
        setToken('')
        localStorage.removeItem('accessToken');
      };
    
    const logout=()=>{
          setUser(null);
          deleteIdUser();
          deleteToken();
      }
  
    const value= useMemo(()=>{
        return({
            user,
            token,
            login,
            logout,
            register,
            setUser,
            setIdUser,
            setToken,
            setTokens
        }) 
    }, [user, token])

    return(
        <UserContext.Provider
            value={value}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;

export function UseUser() {
    const context=React.useContext(UserContext);
    if(!context){throw new Error('useUser debe estar dentro del proceedor userConext')}

    return context;
}
