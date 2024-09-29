import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";
import LoanRequest from "@/models/LoanRequest";
import { mongoConnect } from "@/config/mongodb";

export async function POST(request: NextRequest, res: NextApiResponse) {
  const reqBody = await request.json();

  // Check for missing MONGODB_URI environment variable
  if (!process.env.MONGODB_URI) {
    return res
      .status(500)
      .json({ message: "MONGODB_URI not configured in .env" });
  }

  await mongoConnect(); // Ensure connection before database operations

  const { id, newstatus } = reqBody;

  // Validate new status
  const allowedStatuses = ["approved", "verified", "rejected","approve","reject","verify"];
  const lowercaseStatus = newstatus.toLowerCase(); // Convert to lowercase for case-insensitive validation
  if (!allowedStatuses.includes(lowercaseStatus)) {
    return NextResponse.json({ message: "Invalid status provided." });
  }
  // Map newstatus to the desired approved, verified, or rejected value
  let normalizedStatus;
  switch (lowercaseStatus) {
    case "approve":
      normalizedStatus = "approved";
      break;
    case "verify":
      normalizedStatus = "verified"; // Treat "verify" as "approved"
      break;
    case "reject":
      normalizedStatus = "rejected";
      break;
    default:
      console.error(`Unexpected newstatus value: ${lowercaseStatus}`);
      return res.status(500).json({ message: "Internal server error. Please try again later." });
  }
  console.log(normalizedStatus)
  // Handle invalid or unexpected newstatus values gracefully
  if (!normalizedStatus) {
    console.error(`Unexpected newstatus value: ${lowercaseStatus}`);
    return NextResponse.json({ message: "Internal server error. Please try again later." });
  }

  try {
    // Update loan request status using findByIdAndUpdate
    const updatedLoanRequest = await LoanRequest.findByIdAndUpdate(
      id,
      { loanstatus: normalizedStatus },
      { new: true } // Return the updated document
    );

    console.log("Loan request status updated:", updatedLoanRequest); // Log for debugging

    if (!updatedLoanRequest) {
      return NextResponse.json({ message: "Loan request not found." });
    }

    return NextResponse.json({ message: "Status updated successfully." });
  } catch (error) {
    console.error("Error updating loan request status:", error);
    return NextResponse.json({ message: "Internal server error. Please try again later." });
  }
}
