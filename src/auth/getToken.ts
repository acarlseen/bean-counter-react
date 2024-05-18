import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";


export const getToken = () => {
    const { getAccessTokenSilently } = useAuth0();
    const [ token, setToken ] = useState('');

    async function retreiveToken(){
        const result = await getAccessTokenSilently({
            authorizationParams: {
                audience: `http://BeanCounter.com/api`,
                scope : 'read:tester'
            }
        });
        //console.log(`FROM AUTH0: ${result}`);
        
        setToken(result)
        storeToken(result)
    }
    
    function storeToken (accessToken:any) {
        localStorage.setItem('accessToken', accessToken);
        //console.log(`ACCESS TOKEN: ${accessCheck}`);
    }
    return {token: token, setToken: retreiveToken}
}