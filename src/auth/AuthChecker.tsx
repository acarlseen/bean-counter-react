import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({children}: Props) => {
    const navigate = useNavigate();
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    // This will just check if the user is logged in, if so, it returns the children
    // (which are passed as props - it's just whatever component is either protected
    // or not)
    // otherwise it sends them to the login route

    useEffect(() => {
        if(!isLoading && !isAuthenticated){
            navigate("../");
             loginWithRedirect();
        }
    }, [isLoading, isAuthenticated, loginWithRedirect]);

    useEffect(() => {
        if(!isLoading && isAuthenticated){
            navigate('/portfolio');
        }
    }, [isLoading, isAuthenticated, navigate])
  return (
    <>
        {children}
    </>
  )
}

export default AuthChecker