import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/dashboard/admin.dashboard.css";
import AdminTeacherList from "../../components/AdminTeacherList";

const AdminDashboard = ({ onLogout }) => {
  return (
    <div className="admin-container">
      <Header onLogout={onLogout} usertype={"Admin"} />
      
      <AdminTeacherList />
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
