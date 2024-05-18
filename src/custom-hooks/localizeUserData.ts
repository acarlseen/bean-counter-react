import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

export const useLocalizeUserData = () => {
    const { isAuthenticated, user } = useAuth0();
    const [ userID, setUserID ] = useState('')

    function setUserData() { 
        if(isAuthenticated){
            var result = user!.sub!.split('|');
            
            if (result.length == 1){
                setUserID(result[0])
                storeUserID(result[0])
            }
            else{
                setUserID(result[1])
                storeUserID(result[1])
            }
        }
    }

    const storeUserID = (userID: string) => {
        localStorage.setItem('userID', userID)
    }
    
    return {userData: userID, localizeUserData: setUserData}
}