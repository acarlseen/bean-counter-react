import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react";
import { getToken } from "../auth/getToken";
import { useLocalizeUserData } from "../custom-hooks/localizeUserData";

export const Navbar = () => {
    const {isAuthenticated, loginWithRedirect, logout } = useAuth0()
    const [loggedIn, setLoggedIn] = useState(isAuthenticated);
    const { token, setToken } = getToken();
    const { localizeUserData } = useLocalizeUserData();

    useEffect( () => {
        setToken();
    }, [loggedIn])

    useEffect( () => {
        localizeUserData(); 
    }, [token])
    
    function handleSignIn () {
        loginWithRedirect();
        setLoggedIn(isAuthenticated)
    }

    

    function handleSignOut() {
        logout();
        localStorage.clear()
    }

  return (
    <>
        <nav className="flex flex-row w-full justify-between bg-red-800 text-gray-100 fixed top-0 z-10">
            <div>
                <Link to={'/'}>
                    <button className="font-semibold text-3xl m-5 hover:text-orange-200">
                        Bean Counter
                    </button>
                </Link>
            </div>
            <div className="flex justify-evenly">
                <Link to={'/coffee'}>
                    <button className="font-semibold m-5 hover:text-orange-200">
                        Explore
                    </button>
                </Link>
                <Link to={'/portfolio'}>
                    <button className="font-semibold m-5 hover:text-orange-200">
                        Portfolio
                    </button>
                </Link>
                {/* <Link to={'/singlecoffee'}>
                    <button className="font-semibold m-5 hover:text-orange-200">
                        Sample Coffee View
                    </button>
                </Link> */}
                {/* <Link to={'/componenttestpage'}>
                    <button className="font-semibold m-5 hover:text-orange-200">
                        Test Page
                    </button>
                </Link> */}
                {
                    !isAuthenticated ?
                    <Link to="/">
                        <button onClick={handleSignIn}
                        className="font-semibold m-5 hover:text-orange-200">
                            Sign In
                        </button>
                    </Link>

                    :
                    <Link to="/">
                        <button onClick={handleSignOut}
                        className="font-semibold m-5 hover:text-orange-200">
                            Sign Out
                        </button>
                    </Link>
                }
            </div>
        </nav>
        <div className="m-6 text-red-400">
            spacer
        </div>
    </>
  )
}
