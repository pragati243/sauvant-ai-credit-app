import React from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import VerifyBoard from "@/components/verifyboard";
import LoanTable from "@/components/loantable";
import {userTypes } from "@/utils/constants";
const Verifier: React.FC = () => {

  const verifierUserType = userTypes.find((type) => type.value === "verifier") || {
    value: "verifier",
    label: "Verifier",
  };
  return (
    <div>
          <Navbar userTypes={userTypes} initialUserType={{ value: 'verifier', label: 'Verifier' }} />
      <div style={{ display: "flex" }}>
        <Sidebar userName="John Doe" />
        <div className="w-full bg-gray-200">
          <VerifyBoard />
          <LoanTable />
        </div>
      </div>
    </div>
  );
};

export default Verifier;
