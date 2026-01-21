import Profile from "./Profile";
import withAuth from "./withAuth";

const ProtectedProfile = withAuth(Profile);

function AppHoc() {
  return (
    <div>
      <h1>Login / Logout using HOC</h1>
      <ProtectedProfile />
    </div>
  );
}

export default AppHoc;
