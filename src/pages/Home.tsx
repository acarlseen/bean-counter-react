import { Link } from "react-router-dom";
import Background from "../assets/img/cafe-counter.png"

import { useAuth0 } from "@auth0/auth0-react"

function Home() {
  const {isAuthenticated, loginWithRedirect} = useAuth0();

  function handleLogin(){
    loginWithRedirect();
  }

  return (
    <div className="h-screen bg-cover" style={{backgroundImage : `url(${Background})`}}>
      <div className="flex flex-col h-full w-1/3  pl-10 justify-center">
        <div className="flex flex-row h-1/2 bg-black bg-opacity-60  justify-center p-5 rounded-xl shadow-xl">
          <div className="flex-col text-white text-center">
            <h1 className=" font-bold text-3xl text-center">Welcome to the Bean Counter</h1> <br/>
            {
              !isAuthenticated ?
              <Link to='/' onClick={() => handleLogin()}
              className="hover:text-orange-200">
                Sign in to find your next cup
              </Link>
              :
              <></>
            }
            <div className="flex h-1/2 justify-center"></div>
            <div className="flex-row  h-6">
              <a href="https://coffee-ojjf.onrender.com" className="hover:text-yellow-500"> Click here to restart API</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home