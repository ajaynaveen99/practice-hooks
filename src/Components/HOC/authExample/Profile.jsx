function Profile({ onLogout }) {
  return (
    <>
      <h2>👤 Welcome Ajay</h2>
      <button  className="border-2 p-2 rounded-2xl bg-amber-400
      " onClick={onLogout}>Logout</button>
    </>
  );
}

export default Profile;
