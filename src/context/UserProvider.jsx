import React, { useMemo, useState, useEffect} from "react";


import UserContext from "./UserContext";



const UserProvider=({children})=>{

    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');

    

    useEffect(()=>{
        console.log("hola")
    },[]);

    const login=async(form)=>{
        sendDataLogin(socket, form);
        
    }

    const register=async(form)=>{
        sendDataRegister(socket, form);
        await receiveDataOfRegister(socket, (data)=>{
            if(data==false){
                console.log("El usuario ya existe");
                return false;
            }else{
                console.log("Usuario creado satisfactoriamente");
                return true;
            }
        } )
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
