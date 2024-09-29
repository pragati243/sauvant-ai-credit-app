"use client";
import React, { useState, useEffect } from "react";
import { ArrowDown01, Filter, EllipsisVertical } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface Loan {
  _id: number;
  fullName: string;
  loanAmount: number;
  loanstatus: string;
}

const LoanTable: React.FC = () => {
  const [loansData, setLoans] = useState<Loan[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [selectedLoanId, setSelectedLoanId] = useState<number | null>(null);
  const [newStatus, setNewStatus] = useState<string | null>(null);
  const pathName = usePathname();

  useEffect(() => {
    fetchLoanApplications();
  }, []);

  const fetchLoanApplications = async () => {
    try {
      const response = await fetch("/api/loan-applications");
      const data = await response.json();
      console.log(JSON.stringify(data));
      setLoans(data);
    } catch (error) {
      console.error("Error fetching loan applications:", error);
    }
  };

  const toggleDropdown = (
    event: React.MouseEvent<HTMLButtonElement>,
    loanId: number,
  ) => {
    event.stopPropagation(); // Prevent event bubbling
    if (dropdownOpen === null || dropdownOpen !== loanId) {
      setDropdownOpen(loanId);
    }
  };
  
  // 4 states  => current status filtered

  const handleDropdownAction = (loanId: number, action: string) => {
    setSelectedLoanId(loanId);
    // Set newStatus to the selected action first
    setNewStatus(action);
    handleStatusChange(action);
    setDropdownOpen(null);
  };

  const handleStatusChange = async (action: string) => {
    if (!selectedLoanId || !newStatus) {
      console.error("Missing required data for status change.");
      return;
    }

    try {
      const response = await fetch("/api/status-change", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedLoanId, newstatus: action }),
      });

      if (response.ok) {
        console.log(
          `Loan with ID ${selectedLoanId} successfully ${action.toLowerCase()}.`,
        );

        // Update local state only after successful server response
        const updatedLoans = loansData.map((loan) => {
          return loan._id === selectedLoanId
            ? { ...loan, loanstatus: action }
            : loan;
        });

        setLoans(updatedLoans); // Update the loansData state with the updated loan status
      } else {
        console.error(
          `Failed to ${action.toLowerCase()} loan with ID ${selectedLoanId}.`,
        );
        // Handle potential error scenarios here (e.g., display error message to user)
      }
    } catch (error) {
      console.error(
        `Error while ${action.toLowerCase()} loan with ID ${selectedLoanId}:`,
        error,
      );
      // Handle potential error scenarios here (e.g., display error message to user)
    } finally {
      // Optional cleanup tasks if needed (e.g., reset loading state)
    }
  };

  const isAdmin = pathName.startsWith("/admin");
  const isVerifier = pathName.startsWith("/verifier");
  const [filteredStatusOptions, setFilteredStatusOptions] = useState<string[]>(
    [],
  );

  const callFunc = (loanId: number, status: string) => {
    setSelectedLoanId(loanId);
    setNewStatus(status);

    // Filter status options based on user role
    const options = ["approve", "verify", "pending", "reject"];
    const filteredOptions = isAdmin
      ? options.filter((opt) => opt === "approve" || opt === "reject")
      : options.filter((opt) => opt === "verify" || opt === "reject");
    console.log(filteredOptions);
    setFilteredStatusOptions(filteredOptions);
  };

  return (
    <div
      className="p-5 mx-20 mt-5 bg-white"
      onClick={() => setDropdownOpen(null)}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl">Applied Loans</div>
        <div className="flex gap-2">
          <Button className="flex items-center gap-1 px-2 py-1 rounded text-sm">
            <ArrowDown01 /> Sort
          </Button>
          <Button className="flex items-center gap-1 px-2 py-1 rounded text-sm">
            <Filter /> Filter
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 border border-gray-300">Loan Officer</th>
              <th className="px-4 py-2 border border-gray-300">Amount</th>
              <th className="px-4 py-2 border border-gray-300">Date Applied</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {loansData.map((loan) => (
              <tr key={loan._id} className="border-b border-gray-300">
                <td className="px-4 py-2 border-r border-l border-gray-300 flex items-center">
                  <div>
                    <div className="text-lg">{loan.fullName}</div>
                    <div className="text-xs text-gray-500">
                      Updated 1 day ago
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 border-r border-gray-300">
                  <div>
                    <div className="text-lg">{`$${loan.loanAmount}`}</div>
                    <div className="text-xs text-gray-500">
                      {loan.loanAmount > 0 ? "Not Debt Yet" : "-"}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 border-r border-gray-300">
                  <div>
                    <div className="text-lg">4/10/2024</div>
                    <div className="text-xs text-gray-500">5:30 PM</div>
                  </div>
                </td>
                <td className="px-4 py-2 border-r border-gray-300">
                  <div className="flex flex-row items-center">
                    {loan.loanstatus === "pending" ? (
                      <div className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded">
                        Pending
                      </div>
                    ) : loan.loanstatus === "approved" ? (
                      <div className="px-2 py-1 bg-green-200 text-green-800 rounded">
                        Approved
                      </div>
                    ) : loan.loanstatus === "verified" ? (
                      <div className="px-2 py-1 bg-blue-200 text-blue-800 rounded">
                        Verified
                      </div>
                    ) : loan.loanstatus === "rejected" ? (
                      <div className="px-2 py-1 bg-red-200 text-red-800 rounded">
                        Rejected
                      </div>
                    ) : (
                      <div>{loan.loanstatus}</div>
                    )}
                    {(isAdmin || isVerifier) && (
                      <div className="ml-auto relative">
                        <Button
                          className="text-gray-500 hover:text-black h-8 w-8"
                          size="sm"
                          onClick={(event) => {
                            toggleDropdown(event, loan._id);
                            callFunc(loan._id, loan.loanstatus); // Pass current loan status
                          }}
                        >
                          <EllipsisVertical />
                        </Button>
                        {dropdownOpen === loan._id && (
                          <div
                            className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10"
                            // onClick={(e) => e.stopPropagation()}
                          >
                            {filteredStatusOptions.map((option, index) => (
                              <Button
                                key={index}
                                variant="ghost"
                                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                onClick={() => {
                                  handleDropdownAction(loan._id, option);
                                  // Prevent default behavior to avoid full page refresh
                                  event.preventDefault();
                                }}
                              >
                                {option}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanTable;

