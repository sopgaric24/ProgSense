import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/dashboard/admin.dashboard.css";

const AdminDashboard = ({ onLogout }) => {
  return (
    <div className="admin-container">
      <Header onLogout={onLogout} usertype={"Admin"} />

      <div className="teacherlist-container">
        <h1>User List</h1>
        <ul className="teacher-data">
          <li className="fullname">John Doe Admin</li>
          <li className="usertype">Teacher</li>
          <li className="isVerified">
            <label htmlFor="yesno1">
              <input name="yesno1" type="radio" />
              <span>Yes</span>
            </label>
            <label>
              <input name="yesno1" type="radio" />
              <span>No</span>
            </label>
          </li>
        </ul>
        <ul className="teacher-data">
          <li className="fullname">John Doe Admin</li>
          <li className="usertype">Teacher</li>
          <li className="isVerified">
            <label htmlFor="yesno2">
              <input name="yesno2" type="radio" />
              <span>Yes</span>
            </label>
            <label>
              <input name="yesno2" type="radio" />
              <span>No</span>
            </label>
          </li>
        </ul>
        <ul className="teacher-data">
          <li className="fullname">John Doe Admin</li>
          <li className="usertype">Teacher</li>
          <li className="isVerified">
            <label htmlFor="yesno3">
              <input name="yesno3" type="radio" />
              <span>Yes</span>
            </label>
            <label>
              <input name="yesno3" type="radio" />
              <span>No</span>
            </label>
          </li>
        </ul>
        <ul className="teacher-data">
          <li className="fullname">John Doe Admin</li>
          <li className="usertype">Teacher</li>
          <li className="isVerified">
            <label htmlFor="yesno4">
              <input name="yesno4" type="radio" />
              <span>Yes</span>
            </label>
            <label>
              <input name="yesno4" type="radio" />
              <span>No</span>
            </label>
          </li>
        </ul>
        <ul className="teacher-data">
          <li className="fullname">John Doe Admin</li>
          <li className="usertype">Teacher</li>
          <li className="isVerified">
            <label htmlFor="yesno5">
              <input name="yesno5" type="radio" />
              <span>Yes</span>
            </label>
            <label>
              <input name="yesno5" type="radio" />
              <span>No</span>
            </label>
          </li>
        </ul>
        <ul className="teacher-data">
          <li className="fullname">John Doe Admin</li>
          <li className="usertype">Teacher</li>
          <li className="isVerified">
            <label htmlFor="yesno6">
              <input name="yesno6" type="radio" />
              <span>Yes</span>
            </label>
            <label>
              <input name="yesno6" type="radio" />
              <span>No</span>
            </label>
          </li>
        </ul>
        <ul className="teacher-data">
          <li className="fullname">John Doe Admin</li>
          <li className="usertype">Teacher</li>
          <li className="isVerified">
            <label htmlFor="yesno7">
              <input name="yesno7" type="radio" />
              <span>Yes</span>
            </label>
            <label>
              <input name="yesno7" type="radio" />
              <span>No</span>
            </label>
          </li>
        </ul>
        <ul className="teacher-data">
          <li className="fullname">John Doe Admin</li>
          <li className="usertype">Teacher</li>
          <li className="isVerified">
            <label htmlFor="yesno8">
              <input name="yesno8" type="radio" />
              <span>Yes</span>
            </label>
            <label>
              <input name="yesno8" type="radio" />
              <span>No</span>
            </label>
          </li>
        </ul>
        <ul className="teacher-data">
          <li className="fullname">John Doe Admin</li>
          <li className="usertype">Teacher</li>
          <li className="isVerified">
            <label htmlFor="yesno9">
              <input name="yesno9" type="radio" />
              <span>Yes</span>
            </label>
            <label>
              <input name="yesno9" type="radio" />
              <span>No</span>
            </label>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
