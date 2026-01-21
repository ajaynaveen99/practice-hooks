import { useState } from "react";

function withAuth(Component) {
  return function AuthComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login() {
      setIsLoggedIn(true);
    }

    function logout() {
      setIsLoggedIn(false);
    }

    if (!isLoggedIn) {
      return (
        <>
          <h2>❌ Please Login</h2>
          <button  className="border-2" onClick={login}>Login</button>
        </>
      );
    }

    return <Component  onLogout={logout} />;
  };
}

export default withAuth;
