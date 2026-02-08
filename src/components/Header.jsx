import logout from "../img/logout.png";

const Header = ({ onLogout, usertype }) => {
  return (
    <header className={`dashboard ${usertype}`}>
      <div className="logo">ProgSense</div>
      <div className="userinfo">
        <div className="user-conatiner">
          <p className="fullname">John Doe</p>
          <p className="usertype">{usertype}</p>
        </div>

        <div className="btn logout">
          <button className="btn logout-btn" onClick={onLogout}>
            <img src={logout} alt="logout button" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
