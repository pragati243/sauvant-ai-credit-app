import React from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import UserDashboard from "@/components/user";
import { userTypes } from "@/utils/constants";

export default function User() {
  return (
    <div>
     <Navbar userTypes={userTypes} initialUserType={{ value: 'user', label: 'User' }} />
      <div style={{ display: "flex" }}>
        <Sidebar userName="John Doe" />
        <UserDashboard />
      </div>
    </div>
  );
}
