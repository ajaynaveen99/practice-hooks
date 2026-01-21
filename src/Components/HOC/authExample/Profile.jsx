function Profile({ onLogout }) {
  return (
    <>
      <h2>👤 Welcome Ajay</h2>
      <button  className="border-2" onClick={onLogout}>Logout</button>
    </>
  );
}

export default Profile;
