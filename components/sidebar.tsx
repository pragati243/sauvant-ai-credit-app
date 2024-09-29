"use client";
import React from "react";
import {
  Home,
  DollarSign,
  Users,
  User,
  HandCoins,
  University,
  LogOut,
  Building,
  Calendar,
  Cog,
  Lock,
  BadgeDollarSign,
  ReceiptEuroIcon,
  FileSignature,
  ReceiptText,
} from "lucide-react";

interface SidebarProps {
  userName: string;
}

const Sidebar: React.FC<SidebarProps> = ({ userName }) => {
  return (
    <div className="bg-green-900 text-white w-64 h-full p-4 flex flex-col justify-between">
      <div className="flex items-center mb-4">
        <User className="w-12 h-12 rounded-full mr-4" />
        <span className="text-lg font-semibold">{userName}</span>
      </div>
      <nav>
        <ul>
          {/* Sidebar menu items */}
          <li className="py-2 flex items-center border-t">
            <Home className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Dashboard
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <Users className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Borrowers
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <DollarSign className="w-6 h-6 mr-2" />
            <a
              href="/user/loan"
              className="block hover:bg-green-800 px-4 py-2 rounded"
            >
              Loans
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <HandCoins className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Repayments
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <University className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Accounting
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <ReceiptEuroIcon className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Reports
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <Building className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Collateral
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <Lock className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Access Configurations
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <ReceiptText className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Savings
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <BadgeDollarSign className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Expenses
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <FileSignature className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              E-signature
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <Users className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Investor Accounts
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <Calendar className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Calendar
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <Cog className="w-6 h-6 mr-2" />
            <a href="#" className="block hover:bg-green-800 px-4 py-2 rounded">
              Settings
            </a>
          </li>
          <li className="py-2 flex items-center border-t">
            <LogOut className="w-6 h-6 mr-2" />
            <a href="/" className="block hover:bg-green-800 px-4 py-2 rounded">
              Sign Out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
