import React from "react";
import "./styles.css";

import {
  User,
  BarChart,
  BookOpenCheck,
  DollarSign,
  UserCheck,
  Landmark,
  PiggyBank,
  Banknote,
} from "lucide-react";

interface Box {
  id: number;
  icon: React.ElementType;
  amount: number;
  content: string;
}

const boxes: Box[] = [
  { id: 1, icon: User, amount: 200, content: "ACTIVE USERS" },
  { id: 2, icon: BarChart, amount: 100, content: "BORROWERS" },
  { id: 3, icon: BookOpenCheck, amount: 55000, content: "CASH DISBURSED" },
  { id: 4, icon: DollarSign, amount: 10000, content: "CASH RECEIVED" },
  { id: 5, icon: PiggyBank, amount: 200, content: "SAVINGS" },
  { id: 6, icon: UserCheck, amount: 200, content: "REPAID LOANS" },
  { id: 7, icon: Landmark, amount: 200, content: " Other Accounts" },
  { id: 8, icon: Banknote, amount: 200, content: "LOANS" },
];

const AdminBoard: React.FC = () => {
  return (
    <div className="bg-gray-200 w-full">
      <div className="flex flex-col justify-center mx-20 py-2">
        <div className="flex flex-row pt-8 mb-2 items-center">
          <div className="text-2xl font-bold">Dashboard</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {boxes.map((box) => (
            <div key={box.id} className="flex rounded-lg shadow-md bg-green-900 font-bold ">
              <div className="bg-custom-green px-6 py-4 flex items-center text-white text-3xl ">
                {React.createElement(box.icon)}
              </div>
              <div className="bg-white px-4 py-4 flex-grow">
                <div className="font-bold text-lg">{box.amount}</div>
                <div className="text-xs text-gray-500">{box.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBoard;
