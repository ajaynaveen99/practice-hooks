import Profile from "./Profile";
import withAuth from "./withAuth";

const ProtectedProfile = withAuth(Profile);

function AppHoc() {
  return (
    <div className="flex justify-center items-center  flex-col text-6xl ">
      <h1>Login / Logout using HOC</h1>
      <ProtectedProfile />
    </div>
  );
}

export default AppHoc;
