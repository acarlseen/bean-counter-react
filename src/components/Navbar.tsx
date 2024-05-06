import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

export const Navbar = () => {
    const {isAuthenticated, loginWithRedirect, logout } = useAuth0()

    function handleSignIn () {
        loginWithRedirect();
    }

    function handleSignOut() {
        logout();
    }

  return (
    <>
        <nav className="flex flex-row w-full justify-between bg-black text-gray-300 fixed top-0">
            <div>
                <Link to={'/'}>
                    <button className="font-semibold m-5">
                        Bean Counter
                    </button>
                </Link>
            </div>
            <div className="flex justify-evenly">
                <Link to={'/coffee'}>
                    <button className="font-semibold m-5">
                        Explore
                    </button>
                </Link>
                <Link to={'/portfolio'}>
                    <button className="font-semibold m-5">
                        Portfolio
                    </button>
                </Link>
                <Link to={'/singlecoffee'}>
                    <button className="font-semibold m-5">
                        Sample Coffee View
                    </button>
                </Link>
                <Link to={'/componenttestpage'}>
                    <button className="font-semibold m-5">
                        Test Page
                    </button>
                </Link>
                {
                    !isAuthenticated ?
                    <Link to="/">
                        <button onClick={handleSignIn}
                        className="font-semibold m-5">
                            Sign In
                        </button>
                    </Link>

                    :
                    <Link to="/">
                        <button onClick={handleSignOut}
                        className="font-semibold m-5">
                            Sign Out
                        </button>
                    </Link>
                }
            </div>
        </nav>
        <div className="m-5 text-red-400">
            spacer
        </div>
    </>
  )
}
