import React from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import AdminBoard from "@/components/adminboard";
import LoanTable from "@/components/loantable";
import { userTypes } from "@/utils/constants";

export default function Admin() {
  // Find the "admin" user type or use a default value if not found
  const adminUserType = userTypes.find((type) => type.value === "admin") || {
    value: "admin",
    label: "Admin",
  };

  return (
    <div>
 <Navbar userTypes={userTypes} initialUserType={{ value: 'admin', label: 'Admin' }} />
      <div style={{ display: "flex" }}>
        <Sidebar userName="John Doe" />
        <div className="w-full bg-gray-200">
          <AdminBoard />
          <LoanTable />
        </div>
      </div>
    </div>
  );
}
