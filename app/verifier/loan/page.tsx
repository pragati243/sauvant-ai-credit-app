import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import UserDashboard from "@/components/user";
import {userTypes} from "@/utils/constants"

export default function User() {
  const verifierUserType = userTypes.find((type) => type.value === "verifier") || {
    value: "verifier",
    label: "Verifier",
  };
  return (
    <div>
             <Navbar userTypes={userTypes} initialUserType={{ value: 'verifier', label: 'Verifier' }} />
      <div style={{ display: "flex" }}>
        <Sidebar userName="John Doe" />
        <UserDashboard />
      </div>
    </div>
  );
}