import React from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import UserDashboard from "@/components/user";
import { userTypes } from "@/utils/constants";

export default function User() {
  const adminUserType = userTypes.find((type) => type.value === "admin") || {
    value: "admin",
    label: "Admin",
  };

  return (
    <div>
      <Navbar userTypes={userTypes} initialUserType={{ value: 'admin', label: 'Admin' }} />
      <div style={{ display: "flex" }}>
        <Sidebar userName="John Doe" />
        <UserDashboard />
      </div>
    </div>
  );
}
