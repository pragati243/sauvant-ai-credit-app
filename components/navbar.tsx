
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bell, Mail, User, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

// Interface to define user type options with string values
interface UserType {
  value: string;
  label: string;
}

const Navbar = ({
  userTypes = [],
  initialUserType,
}: {
  userTypes: UserType[];
  initialUserType: UserType;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userType, setUserType] = useState<UserType>(initialUserType); // Set initial user type

  const handleUserTypeChange = (type: UserType) => {
    setUserType(type);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    
    <nav className="bg-white py-4 border-b border-green-900">
      <div className="mx-4 flex justify-between items-center">
        <div className="flex items-center">
          <button className="text-green-900 font-bold text-xl relative flex items-center space-x-4">
            <Menu className="text-green-900" />
            <div>Credit App</div>
          </button>
        </div>
        <div className="flex items-center space-x-6">
          {/* Home Link */}
          {userType.value === "user" && (
            <Link
              href="#"
              className="text-green-900 hover:text-green-200 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-gauge mr-2"
              >
                <path d="m12 14 4-4" />
                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
              </svg>
              <span> Home</span>
            </Link>
          )}
          {/* Payments Link */}
          {userType.value === "user" && (
            <Link
              href="#"
              className="text-green-900 hover:text-green-200 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-pound-sterling mr-2"
              >
                <path d="M18 7c0-5.333-8-5.333-8 0" />
                <path d="M10 7v14" />
                <path d="M6 21h12" />
                <path d="M6 13h10" />
              </svg>
              Payments
            </Link>
          )}
          {/* Budget Link */}
          {userType.value === "user" && (
            <Link
              href="#"
              className="text-green-900 hover:text-green-200 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-wallet mr-2"
              >
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
              </svg>
              Budget
            </Link>
          )}
          {/* Card Link */}
          {userType.value === "user" && (
            <Link
              href="#"
              className="text-green-900 hover:text-green-200 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-credit-card mr-2"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              Card
            </Link>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="text-green-900" />
          <Mail className="text-green-900" />
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleDropdown}
            >
              <User className="text-green-900" />
              <ChevronDown className="text-green-900" />
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-green-900 rounded-md shadow-lg">
                <Link
                  href="/user/dashboard"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full rounded-md"
                >
                  User
                </Link>
                <Link
                  href="/verifier/dashboard"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full rounded-md"
                >
                  Verifier
                </Link>
                <Link
                  href="/admin/dashboard"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full rounded-md"
                >
                  Admin
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
