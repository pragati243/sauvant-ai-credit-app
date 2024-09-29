import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface LoanFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoanForm: React.FC<LoanFormProps> = ({ isOpen, onClose }: LoanFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    loanAmount: "",
    loanTenure: "",
    employmentStatus: "",
    reasonForLoan: "",
    employmentAddress: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: false,
    loanAmount: false,
    loanTenure: false,
    employmentStatus: false,
    reasonForLoan: false,
    employmentAddress: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: value.trim() === "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if any field is empty
    const anyEmptyField = Object.values(formErrors).some((error) => error);
    if (anyEmptyField) {
      alert("All the fields are necessary");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/loan-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form data
        setFormData({
          fullName: "",
          loanAmount: "",
          loanTenure: "",
          employmentStatus: "",
          reasonForLoan: "",
          employmentAddress: "",
        });

        onClose();
      } else {
        console.error("Failed to submit form:", response.statusText);
        // Handle failed form submission
        // Show error message to the user
        alert("Failed to submit form. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
      // Show error message to the user
      alert("An error occurred. Please try again later.");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-md shadow-lg">
          <div className="text-xl font-bold mb-4">Apply For Loan</div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-10 mb-6">
              <div>
                <label htmlFor="fullName" className="block font-medium">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`border border-gray-300 rounded-md px-3 py-2 w-full ${
                    formErrors.fullName ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your full name"
                />
                {formErrors.fullName && (
                  <p className="text-red-500 text-sm">Full name is required</p>
                )}
              </div>
              <div>
                <label htmlFor="loanAmount" className="block font-medium">
                  How much do you need?
                </label>
                <input
                  type="number"
                  id="loanAmount"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className={`border border-gray-300 rounded-md px-3 py-2 w-full ${
                    formErrors.loanAmount ? "border-red-500" : ""
                  }`}
                  placeholder="Enter loan amount"
                />
                {formErrors.loanAmount && (
                  <p className="text-red-500 text-sm">
                    Loan amount is required
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="loanTenure" className="block font-medium">
                  Loan tenure (in months)
                </label>
                <input
                  type="number"
                  id="loanTenure"
                  name="loanTenure"
                  value={formData.loanTenure}
                  onChange={handleChange}
                  className={`border border-gray-300 rounded-md px-3 py-2 w-full ${
                    formErrors.loanTenure ? "border-red-500" : ""
                  }`}
                  placeholder="Enter loan tenure"
                />
                {formErrors.loanTenure && (
                  <p className="text-red-500 text-sm">
                    Loan tenure is required
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="employmentStatus" className="block font-medium">
                  Employment status
                </label>
                <input
                  type="text"
                  id="employmentStatus"
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  className={`border border-gray-300 rounded-md px-3 py-2 w-full ${
                    formErrors.employmentStatus ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your employment status"
                />
                {formErrors.employmentStatus && (
                  <p className="text-red-500 text-sm">
                    Employment status is required
                  </p>
                )}
              </div>
              <div className="col-span-2">
                <label htmlFor="reasonForLoan" className="block font-medium">
                  Reason for loan
                </label>
                <textarea
                  id="reasonForLoan"
                  name="reasonForLoan"
                  value={formData.reasonForLoan}
                  onChange={handleChange}
                  className={`border border-gray-300 rounded-md px-3 py-2 w-full ${
                    formErrors.reasonForLoan ? "border-red-500" : ""
                  }`}
                  style={{ height: "200px" }} // Adjust the height as needed
                  placeholder="Enter the reason for loan"
                ></textarea>
                {formErrors.reasonForLoan && (
                  <p className="text-red-500 text-sm">
                    Reason for loan is required
                  </p>
                )}
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="employmentAddress"
                  className="block font-medium"
                >
                  Employment address
                </label>
                <input
                  type="text"
                  id="employmentAddress"
                  name="employmentAddress"
                  value={formData.employmentAddress}
                  onChange={handleChange}
                  className={`border border-gray-300 rounded-md px-3 py-2 w-full ${
                    formErrors.employmentAddress ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your employment address"
                />
                {formErrors.employmentAddress && (
                  <p className="text-red-500 text-sm">
                    Employment address is required
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                type="button"
                onClick={onClose}
                className="mr-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Apply
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoanForm;
